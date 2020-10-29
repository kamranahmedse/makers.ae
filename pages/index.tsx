import DefaultLayout from '../layouts/default';
import { NextSeo } from 'next-seo';
import siteConfig from '../configs/site-config';
import { Box } from '@chakra-ui/core';
import { HomeScreen } from '../screens/home/screen';

export default function Home() {
  return (
    <DefaultLayout>
      <NextSeo
        title={ 'Makers.ae — Community of makers in UAE' }
        description={ 'Makers.ae aims to build a community of developers in UAE.' }
        titleTemplate={ siteConfig.seo.titleTemplate }
      />

      <Box maxW='890px' mx='auto'>
        <HomeScreen />
      </Box>
    </DefaultLayout>
  );
}
