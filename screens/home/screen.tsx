import { Box, Heading, Text } from '@chakra-ui/core';
import { MembersList } from './components/members-list';
import { FeaturesList } from './components/features-list';
import { SubscribeBox } from './components/subscribe-box';
import { FaqList } from './components/faq-list';
import { PageHero } from './components/page-hero';
import { TopNav } from '../../src/components/top-nav';

export function HomeScreen() {
  return (
    <>
      <TopNav />
      <PageHero />

      <Box mt='90px'>
        <Heading mb='7px' className='yellow-gradient-color' color='gray.100'>90+ Members</Heading>
        <Text color='gray.400'>Get connected with a diverse group of members, working at known firms in UAE.</Text>
        <MembersList />
      </Box>

      <Box mt='90px'>
        <Heading mb='15px' className='yellow-gradient-color' color='gray.100'>Why should you Join</Heading>

        <FeaturesList />

        <Box mt='30px'>
          <SubscribeBox />
        </Box>
      </Box>

      <Box mt='90px'>
        <Heading mb='7px' className='yellow-gradient-color' color='gray.100'>FAQs</Heading>
        <Text color='gray.400'>Feel free to reach out if there is something we haven't answered</Text>
        <FaqList />
      </Box>
    </>
  );
}
