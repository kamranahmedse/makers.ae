import DefaultLayout from '../src/layouts/default';
import { NextSeo } from 'next-seo';
import siteConfig from '../configs/site-config';
import { Box } from '@chakra-ui/core';
import { HomeScreen } from '../src/screens/home/screen';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { getAllMembers, MemberType } from '../src/api/members';

type HomeProps = {
  members: MemberType[]
};

export default function Home(props: HomeProps) {
  const { members } = props;

  return (
    <DefaultLayout>
      <NextSeo
        title={ 'Makers.ae — Community of makers in UAE' }
        description={ 'Makers.ae aims to build a community of developers in UAE.' }
        titleTemplate={ siteConfig.seo.titleTemplate }
      />

      <Box maxW='890px' mx='auto'>
        <HomeScreen members={ members } />
      </Box>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async function (context): Promise<GetStaticPropsResult<HomeProps>> {
  return {
    props: {
      members: getAllMembers()
    }
  };
};
