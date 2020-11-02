import { Command } from './index';

type ValidateMembersCommandParams = {};

export const ValidateMembersCommand: Command = {
  signature: 'validate-members',
  title: 'Validate members',
  description: 'Validates if all the given members have valid data',
  run: async (params: ValidateMembersCommandParams): Promise<void> => {
    // @todo validate if all the profiles have required props, profile.json, bio.md and image exist
  }
};
