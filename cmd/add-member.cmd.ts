import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import fileType from 'file-type';
import inquirer from 'inquirer';
import { Command } from './index';

const avatarsDir = path.join(process.cwd(), './public/avatars');
const membersDir = path.join(process.cwd(), './data/members');

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
    const fileName = `${ answer.username }.${ fileDetails.ext }`;

    fs.writeFileSync(path.join(avatarsDir, fileName), buffer);

    return fileName;
  } catch (e) {
    return false;
  }
}

function validateMinLength(input: string) {
  if (input.length < 4) {
    return 'length must be at least 4';
  } else {
    return true;
  }
}

async function validateUsername(username: Answer['username']) {
  if (username.length < 4) {
    return 'length must be at least 4';
  } else {
    const memberDir = path.join(membersDir, username);

    if (!fs.existsSync(memberDir)) {
      fs.mkdirSync(memberDir);
      return true;
    } else {
      return 'username already exist';
    }
  }
}

export const AddMemberCommand: Command = {
  signature: 'members.add',
  title: 'Add new member',
  description: 'Adding details of the new member',
  run: async (): Promise<void> => {
    const answer: Answer = await inquirer
      .prompt([
        {
          name: 'title',
          type: 'input',
          message: 'Full name of the user?',
          validate: validateMinLength
        },
        {
          name: 'username',
          type: 'input',
          message: 'Username of the user?',
          validate: validateUsername
        },
        {
          name: 'designation',
          type: 'input',
          message: 'Designation of the user?',
          validate: validateMinLength
        },
        {
          name: 'company',
          type: 'input',
          message: 'Company at which this user works?',
          validate: validateMinLength
        },
        {
          name: 'imageUrl',
          type: 'input',
          message: 'URL to take the image from?'
        }
      ]);

    const memberDir = path.join(membersDir, answer.username);

    const fileName = await downloadAndSaveImg(answer);
    if (!fileName) {
      console.log('\n\nCould not save image..!\nExiting..!\n\n');
      fs.rmdirSync(memberDir);
      process.kill(process.pid, 'SIGINT');
    }

    const userDetails = {
      ...answer,
      imageUrl: `/avatars/${ fileName }`,
      joinDate: new Date().toISOString()
    };

    // profile
    fs.writeFileSync(
      path.join(memberDir, 'profile.json'),
      JSON.stringify(userDetails, null, 4));

    // bio.md
    fs.writeFileSync(path.join(memberDir, 'bio.md'), '');
  }
};
