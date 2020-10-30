import { Flex, Heading, Link, Text } from '@chakra-ui/core';
import Image from 'next/image';
import siteConfig from '../../../configs/site-config';
import { AvatarGroupList } from './avatar-group-list';

export function PageHero() {
  return <>
    <Flex>
      <Heading lineHeight='48px' color='gray.500'><Text as='span' className='yellow-gradient-color'>Makers</Text> is the community of <Text as='span' className='purple-gradient-color'>developers</Text>, <Text className='red-gradient-color' as='span'>designers</Text> and <Text className='blue-gradient-color' as='span'>tech
        firms</Text> focusing on open-source, practical knowledge, tech culture, career growth.</Heading>
    </Flex>

    <Flex justifyContent='space-between' alignItems='center' mt='30px'>
      <Flex alignItems='center'>
        <Image className='rounded-full' height='48px' width='48px' src='/avatars/kamran.jpeg' />
        <Text ml='15px' as='span' color='gray.500'>
          Run by&nbsp;
          <Link target='_blank' color='gray.300' fontWeight={ 700 } href={ siteConfig.author.twitter }>Kamran</Link>
        </Text>
      </Flex>
      <AvatarGroupList />
    </Flex>
  </>;
}
