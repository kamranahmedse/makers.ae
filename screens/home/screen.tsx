import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/core';
import Image from 'next/image';
import siteConfig from '../../configs/site-config';
import { MembersList } from './components/members-list';
import { AvatarGroupList } from './components/avatar-group-list';

export function HomeScreen() {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box>
          <Text color='gray.500' fontSize='16px' fontWeight={ 600 }>Developers and designers in UAE</Text>
        </Box>
        <Box>
          <Button bg='yellow.400' rounded='20px' px='35px'>Join</Button>
        </Box>
      </Flex>

      <Flex my='40px'>
        <Heading lineHeight='48px' color='gray.500'><Text as='span' className='yellow-gradient-color'>Makers</Text> is the community of <Text as='span' className='purple-gradient-color'>developers</Text>, <Text className='red-gradient-color' as='span'>designers</Text> and <Text className='blue-gradient-color' as='span'>tech
          firms</Text> in UAE. Get connected, share your work, join sessions, be informed and more.</Heading>
      </Flex>

      <Flex justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center'>
          <Image className='rounded-full' height='48px' width='48px' src='/avatars/kamran.jpeg' />
          <Text ml='15px' as='span' color='gray.500'>
            Run by&nbsp;
            <Link target='_blank' color='gray.300' fontWeight={ 700 } href={ siteConfig.author.twitter }>Kamran</Link>
          </Text>
        </Flex>
        <AvatarGroupList />
      </Flex>

      <Box mt='90px'>
        <Heading mb='7px' className='yellow-gradient-color' color='gray.100'>90+ Members</Heading>
        <Text color='gray.400'>We have a diverse group of members, working at known firms in UAE.</Text>
        <MembersList />
      </Box>
    </>
  );
}
