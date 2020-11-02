import path from 'path';
import fs from 'fs';

export type MemberType = {
  username: string;
  title: string;
  designation: string;
  company: string;
  imageUrl: string;
  joinDate: string;
};

const membersDirPath = path.join(process.cwd(), 'data/members');

export function getMemberUsernames(): string[] {
  return fs.readdirSync(membersDirPath);
}

export function getMemberByUsername(username: string): MemberType {
  const memberDirPath = path.join(membersDirPath, username);
  const memberBioPath = path.join(memberDirPath, 'profile.json');

  const fileContents = fs.readFileSync(memberBioPath, 'utf8');

  return JSON.parse(fileContents);
}

export function getAllMembers(): MemberType[] {
  const usernames = getMemberUsernames();

  return usernames
    .map(username => getMemberByUsername(username))
    // sort members by joining date in ascending order
    .sort((member1, member2) => (new Date(member1.joinDate) < new Date(member2.joinDate) ? -1 : 1));
}
