import fs from 'fs'
import path from 'path'
import { Command } from './index';

type ValidateMembersCommandParams = {};

type ProfileJsonType = {
  username: string;
  title: string;
  designation: string;
  company: string;
  imageUrl: string;
  joinDate: Date;
}


const membersPath = path.join(process.cwd(), './data/members')

const exitWithMessage = (message: string) => {
  console.log(':::::::::::::::::::::::::::::::::::::::::');
  console.log(message)
  process.exit(1);
}

const checkFilesInMembersDirectories = (membersPaths: string[]) => {
  membersPaths.forEach((memberPath) => {
    const memberDirectory = fs.readdirSync(`${membersPath}/${memberPath}`)
      if (!memberDirectory.includes('bio.md') || !memberDirectory.includes('profile.json')) {
        exitWithMessage(`${memberPath} profile directory is missing bio.md or profile.json`)
      }
  })
  console.log(':::::::::::::::::::::::::::::::::::::::::');
  console.log('Members folders have required files');
}

const checkCorrectUsernameWithDirectory = (membersPaths: string[]) => {
  const avatars = fs.readdirSync(path.join(process.cwd(), './public/avatars'))
  const imageRegex = /\.(png|jpe?g)/;

  membersPaths.forEach((memberPath) => {
    const profile: ProfileJsonType = JSON.parse(fs.readFileSync(`${membersPath}/${memberPath}/profile.json`, 'utf8'));

    if (profile.username !== memberPath) {
      exitWithMessage(`${memberPath} is not same as username in profile.json`)
    }

    const avatar = avatars.find(img => img.split('.')[0] === memberPath);

    if (!avatar || !imageRegex.test(avatar)){
      exitWithMessage(`${memberPath}'s image is not found`)
    }

    // TODO: validate profile fields
  })
}

export const ValidateMembersCommand: Command = {
  signature: 'members.validate',
  title: 'Validate members',
  description: 'Validates if all the given members have valid data',
  run: async (params: ValidateMembersCommandParams): Promise<void> => {
    // TODO: create errors list to log
    let errors;
    const membersDirs = fs.readdirSync(`${membersPath}`);
    // checkFilesInMembersDirectories(membersDirs)
    checkCorrectUsernameWithDirectory(membersDirs)
    // console.log(checkFilesInMembersDirectories())
    // @todo validate if all the profiles have required props, profile.json, bio.md and image exist
  }
};
