import DefaultLayout from '../layouts/default';
import { NextSeo } from 'next-seo';
import siteConfig from '../configs/site-config';
import { Box } from '@chakra-ui/core';
import { ProfileScreen } from '../screens/profile/screen';

export default function Join() {
  return (
    <DefaultLayout>
      <NextSeo
        title={ 'Join Makers.ae — Community of makers in UAE' }
        description={ 'Makers.ae aims to build a community of developers in UAE.' }
        titleTemplate={ siteConfig.seo.titleTemplate }
      />

      <Box maxW='890px' mx='auto'>
        <ProfileScreen />
      </Box>
    </DefaultLayout>
  );
}
