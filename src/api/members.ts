import path from 'path';
import fs from 'fs';

export type MemberType = {
  username: string;
  title: string;
  designation: string;
  company: string;
  imageUrl: string;
};

export function getAllMembers(): MemberType[] {
  const membersDirPath = path.join(process.cwd(), 'data/members');
  const membersDir = fs.readdirSync(membersDirPath);

  return membersDir.map<MemberType>(memberDirName => {
    const memberDirPath = path.join(membersDirPath, memberDirName);
    const memberBioPath = path.join(memberDirPath, 'profile.json');

    const fileContents = fs.readFileSync(memberBioPath, 'utf8');

    return JSON.parse(fileContents);
  });
}
