import DefaultLayout from '../../src/layouts/default';
import { NextSeo } from 'next-seo';
import siteConfig from '../../configs/site-config';
import { Box } from '@chakra-ui/core';
import { ProfileScreen } from '../../src/screens/profile/screen';
import { getProfileByUsername, getMembersPaths, MemberType } from '../../src/api/members';
import { markdownToHtml } from '../../lib/markDownHtml';

export type memberProfileType = {
    profile: MemberType
  }
 
export default function MemberProfile({ profile }: memberProfileType) {

  return (
    <DefaultLayout>
      <NextSeo
        title={ 'Join Makers.ae — Community of makers in UAE' }
        description={ 'Makers.ae aims to build a community of developers in UAE.' }
        titleTemplate={ siteConfig.seo.titleTemplate }
      />

      <Box maxW='890px' mx='auto'>
        <ProfileScreen profile={profile} />
      </Box>
    </DefaultLayout>
  );
}

export async function getStaticPaths() {
  const paths = getMembersPaths()
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const profile = getProfileByUsername(params.name);

  const content = await markdownToHtml(profile.content || '')

  return {
    props: {
        profile: {
            ...profile,
            content
        }
    }
  }
}
