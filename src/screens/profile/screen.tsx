import { Box, Heading, Link, SimpleGrid, Text } from '@chakra-ui/core';
import { TopNav } from '../../components/top-nav';
import { PageFooter } from '../../components/page-footer';
import { LazyImage } from '../../components/lazy-image';
import markdownStyles from './markdown-styles.module.css'
import { memberProfileType } from '../../../pages/profile/[name]';


export function ProfileScreen({ profile }: memberProfileType) {
  const { title, imageUrl, designation, company, content } = profile;

  return (
    <>
      <TopNav />

      <Link color='gray.400' href='/'>&larr; Back to Home</Link>

      <SimpleGrid gridTemplateColumns={ ['1fr', '1fr', '200px 1fr', '200px 1fr'] } mt='40px'>
      <LazyImage width={'200px'} height='auto' skeletonHeight='200px' src={imageUrl} rounded='10px' />
        <Box ml={ [0, 0, '30px', '30px'] }  mt={ ['20px', 0] }>
          <Box mb='30px'>
            <Heading color='gray.100' fontSize='45px' lineHeight='45px' mb='12px'>{title}</Heading>
            <Text color='gray.400' fontSize='17px'>{designation} at {company}</Text>
          </Box>

          {content &&
            <Box mb='30px'>
              <Heading fontSize='34px' color='white' mb='10px'>Bio</Heading>
              <Box
                className={markdownStyles['bioContent']}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Box>
          }

          <Heading fontSize='30px' color='white' mb='10px'>Social Media</Heading>
        </Box>
      </SimpleGrid>

      <PageFooter />
    </>
  );
}
