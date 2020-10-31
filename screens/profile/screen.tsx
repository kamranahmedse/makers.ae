import { Box, Heading, Link, SimpleGrid, Text } from '@chakra-ui/core';
import { TopNav } from '../../components/top-nav';
import { PageFooter } from '../../components/page-footer';
import { LazyImage } from '../../components/lazy-image';

export function ProfileScreen() {
  return (
    <>
      <TopNav />

      <Link color='gray.400'>&larr; Back to Home</Link>

      <SimpleGrid gridTemplateColumns={ ['1fr', '1fr', '200px 1fr', '200px 1fr'] } mt='40px'>
        <LazyImage width={ '200px' } src='/avatars/kamran.jpeg' rounded='10px' />
        <Box ml={ [0, 0, '30px', '30px'] }>
          <Box mb='30px'>
            <Heading color='gray.100' fontSize='45px' lineHeight='45px' mb='12px'>Kamran Ahmed</Heading>
            <Text color='gray.400' fontSize='17px'>Engineering Manager at Tradeling</Text>
          </Box>

          <Box mb='30px'>
            <Heading fontSize='34px' color='white' mb='10px'>Bio</Heading>
            <Text color='gray.400' mb='20px'>Kamran is currently working at tradeling which is a DAFZA funded B2B e-commerce platform in the MENA region where he was one of the early hires. He has been a part of several startups in the region. Before joining tradeling, he worked at tajawal for 4 years where he was one of the pre-launch
              early hires and saw the company grow from 20 people to more than a 1000 people.</Text>
            <Text color='gray.400'>He is the creator and maintainer of several opensource projects including <Link fontWeight={ 500 } color='yellow.400'>developer-roadmap</Link> which is tenth most starred project on GitHub. He has also created and contributed to <Link color='yellow.400' fontWeight={ 500 }>several famous OpenSource
              projects</Link> used by millions of developers.</Text>
          </Box>

          <Heading fontSize='30px' color='white' mb='10px'>Social Media</Heading>
        </Box>
      </SimpleGrid>

      <PageFooter />
    </>
  );
}
