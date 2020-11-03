import fs from "fs"
import fetch from "node-fetch"
import fileType from "file-type"
import inquirer from "inquirer"
import { Command } from "./index";

const IMAGE_DIR = "./public/avatars";
const MEMBERS_DIR = "./data/members";

type Answer = {
  username: string;
  title: string;
  designation: string;
  company: string;
  imageUrl: string;
};

async function downloadAndSaveImg(answer: Answer) {
  try {
    const response = await fetch(answer.imageUrl);
    const buffer = await response.buffer();
    const fileDetails = await fileType.fromBuffer(buffer);
    const fileName = `${answer.username}.${fileDetails.ext}`;

    fs.writeFile(`${IMAGE_DIR}/${fileName}`, buffer, () => {
      console.log("Image saved!");
    });

    return `/avatars/${fileName}`;
  } catch (e) {
    console.log("Something went wrong, couldn't save image;", e);
  }
}

function validateMinLength(input: string) {
  if (input.length < 4) {
    return "length must be at least 4";
  } else {
    return true;
  }
}

async function validateUsername(username: Answer["username"]) {
  if (username.length < 4) {
    return "length must be at least 4";
  } else {
    const directory = `${MEMBERS_DIR}/${username}`;

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
      return true;
    } else {
      return "username already exist";
    }
  }
}

async function addMember() {
  await inquirer
    .prompt([
      {
        name: "username",
        type: "input",
        message: "What is your username?",
        validate: validateUsername,
      },
      {
        name: "title",
        type: "input",
        message: "What is your title (full name)?",
        validate: validateMinLength,
      },
      {
        name: "designation",
        type: "input",
        message: "What is your designation?",
        validate: validateMinLength,
      },
      {
        name: "company",
        type: "input",
        message: "What is your company name?",
        validate: validateMinLength,
      },
      {
        name: "imageUrl",
        type: "input",
        message: "What is your imageUrl?",
      },
    ])
    .then(async (answer: Answer) => {
      const directory = `${MEMBERS_DIR}/${answer.username}`;

      const imgUrl = await downloadAndSaveImg(answer);

      const userDetails = {
        ...answer,
        imageUrl: imgUrl,
        joinDate: new Date().toISOString(),
      };

      // profile
      fs.writeFile(
        `${directory}/profile.json`,
        JSON.stringify(userDetails),
        function (err: Error) {
          if (err) throw err;
        }
      );

      // bio.md
      fs.writeFile(`${directory}/bio.md`, "", function (err: Error) {
        if (err) throw err;
      });
    });
}

export const AddMemberCommand: Command = {
  signature: "members.add",
  title: "Add new member",
  description: "Adding details of the new member",
  run: async (): Promise<void> => {
    await addMember();
  },
};
