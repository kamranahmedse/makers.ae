import DefaultLayout from '../src/layouts/default';
import { NextSeo } from 'next-seo';
import siteConfig from '../configs/site-config';
import { Box } from '@chakra-ui/core';
import { JoinScreen } from '../src/screens/join/screen';

export default function Join() {
  return (
    <DefaultLayout>
      <NextSeo
        title={ 'Join Makers.ae — Community of makers in UAE' }
        description={ 'Makers.ae aims to build a community of developers in UAE.' }
        titleTemplate={ siteConfig.seo.titleTemplate }
      />

      <Box maxW='890px' mx='auto'>
        <JoinScreen />
      </Box>
    </DefaultLayout>
  );
}
