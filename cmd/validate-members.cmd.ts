import path from 'path';
import { Command } from './index';
import {readdirSync,existsSync} from 'fs';
import {MemberType,getMemberByUsername} from "../src/api/members";

const avatarsDir = path.join(process.cwd(), './public');
const membersDir = path.join(process.cwd(), './data/members');

////////////////////////////////////////////////
// type to maintain information regarding
// each directory
////////////////////////////////////////////////

type ProfileStatus = {
  profile: Partial<MemberType>,
  messages: string[],
  imageExists : boolean,
  requiredFiles : boolean
}

type DirectoryProfile = {
  dirName: string,
  profileStatus: ProfileStatus
}

////////////////////////////////////////////////
// Common functions
////////////////////////////////////////////////

function requiredFilesExists({dirName,profileStatus}:DirectoryProfile):void{

  let status   = true;
  let bioFile  = 'bio.md';
  let jsonFile = 'profile.json';

  if (!existsSync(path.join(membersDir, dirName, bioFile))) {
    status = false;
    profileStatus.messages.push(`❌ missing ${bioFile} in ${dirName} directory`);
  }
  if (!existsSync(path.join(membersDir, dirName, jsonFile))) {
    status = false;
    profileStatus.messages.push(`❌ missing ${jsonFile} in ${dirName} directory`);
  }
  profileStatus.requiredFiles = status;
}

function validateJson({dirName,profileStatus}:DirectoryProfile):void{

  let requiredFields  = ['username', 'title', 'designation', 'company', 'imageUrl', 'joinDate'];
  if(dirName !== profileStatus.profile.username){
    profileStatus.messages.push(`❌ directory name for username ${dirName} is not same`);
  }
  let missingFields = requiredFields.filter(
    (field) => !profileStatus.profile.hasOwnProperty(field)
  );

  if(missingFields.length > 0){
    profileStatus.messages.push(`❌ ${missingFields.join(',')} field missing for ${dirName}`);
  }
}

function validateAvatar({profileStatus}:{profileStatus:ProfileStatus}):void{
  if( typeof profileStatus.profile.imageUrl !== 'undefined'){
    if (!existsSync(path.join(avatarsDir,profileStatus.profile.imageUrl))) {
      profileStatus.messages.push(`❌ missing avatar for ${profileStatus.profile.username}`);
    }else{
      profileStatus.imageExists = true;
    }
  }
}

function parseDirectory( name : string):ProfileStatus{
  let profileStatus:ProfileStatus = {
    profile:{},
    messages:[],
    imageExists:false,
    requiredFiles:false
  };
  // check if both required file exists in directory
  requiredFilesExists({dirName:name,profileStatus});
  // try to parse if both file exists
  if(profileStatus.requiredFiles){
    try{
      // check for valid json file
      profileStatus.profile = getMemberByUsername(name);
      // validate for required json and if username and directory is same
      validateJson({ dirName:name, profileStatus });
      // check for valid avatar path
      validateAvatar({ profileStatus });

    }catch(e){
      profileStatus.messages.push(`❌ invalid json in ${name} directory`);
    }
  }
  return profileStatus;
}


function parseMemberDirectories():ProfileStatus[]{
  const profiles = readdirSync(membersDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dir => parseDirectory(dir.name));
  return profiles;
}

export const ValidateMembersCommand: Command = {
  signature: 'members.validate',
  title: 'Validate members',
  description: 'Validates if all the given members have valid data',
  run: async (): Promise<void> => {
    ////////////////////////////////////////////////
    // parse files and hold info. in variable
    ////////////////////////////////////////////////
    console.info('!!! Parsing directories');
    const makersProfile = parseMemberDirectories();

    console.info('!!! Validating Profile Info');
    ////////////////////////////////////////////////
    // go through parsed data to look for discripencies
    ////////////////////////////////////////////////
    const error = makersProfile.reduce( (err,profile) => {
      if(profile.messages.length > 0){
        profile.messages.forEach(msg => console.log(msg));
      }
      else{
        console.log(`✔ ${profile.profile.username} directory is fine`);
      }
      return (err)?err:profile.messages.length > 0;
    },false);
    if(error) return Promise.reject( new Error( 'Invalid data exists have a look in logs' ) );
  }
};
