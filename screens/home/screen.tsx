import { Box, Button, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/core';
import Image from 'next/image';
import siteConfig from '../../configs/site-config';
import { MembersList } from './components/members-list';
import { AvatarGroupList } from './components/avatar-group-list';

export function HomeScreen() {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' mb={'40px'}>
        <Box>
          <Text color='gray.500' fontSize='16px' fontWeight={ 600 }>Developers and designers in UAE</Text>
        </Box>
        <Box>
          <Button bg='yellow.400' rounded='20px' px='35px'>Join</Button>
        </Box>
      </Flex>

      <Box>
        <Flex>
          <Heading lineHeight='48px' color='gray.500'><Text as='span' className='yellow-gradient-color'>Makers</Text> is the community of <Text as='span' className='purple-gradient-color'>developers</Text>, <Text className='red-gradient-color' as='span'>designers</Text> and <Text className='blue-gradient-color' as='span'>tech
            firms</Text> in UAE. Get connected, share your work, join sessions, be informed and more.</Heading>
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
      </Box>

      <Box mt='90px'>
        <Heading mb='7px' className='yellow-gradient-color' color='gray.100'>90+ Members</Heading>
        <Text color='gray.400'>Get connected with a diverse group of members, working at known firms in UAE.</Text>
        <MembersList />
      </Box>

      <Box mt='90px'>
        <Heading mb='15px' className='yellow-gradient-color' color='gray.100'>Why should you Join</Heading>

        <SimpleGrid gridTemplateColumns={ ['1fr', '1fr', '1fr 400px', '1fr 400px'] }>
          <Box mb={ ['20px', '20px', 0, 0] }>
            <Text lineHeight='32px' mb='20px' fontWeight={ 600 } color='gray.200' fontSize='20px'>There are some really talented developers and designers in the region but unlike Europe and America, the community isn't really strong here in UAE. With makers.ae our aim is to bring all the makers of the region together under one umbrella
              and to facilitate growth.</Text>
            <Text lineHeight='32px' fontWeight={ 600 } color='gray.200' fontSize='20px'>The project is fully open-source, there is no fees or any hidden agendas. Goal is to empower the makers in the region.</Text>
          </Box>
          <Stack marginLeft={ [0, 0, '40px', '40px'] } spacing='10px'>
            <Flex alignItems={ 'flex-start' }>
              <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
              <Text ml='10px' color={ 'gray.400' }>Join our Discord, get connected with the other developers in the region.</Text>
            </Flex>
            <Flex alignItems={ 'flex-start' }>
              <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
              <Text ml='10px' color={ 'gray.400' }>Bi-weekly sessions on interesting topics.</Text>
            </Flex>
            <Flex alignItems={ 'flex-start' }>
              <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
              <Text ml='10px' color={ 'gray.400' }>Learn about the tech stack and how the companies in the region are working.</Text>
            </Flex>
            <Flex alignItems={ 'flex-start' }>
              <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
              <Text ml='10px' color={ 'gray.400' }>Find yourself a mentor, ask for advice..</Text>
            </Flex>
            <Flex alignItems={ 'flex-start' }>
              <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
              <Text ml='10px' color={ 'gray.400' }>Interviews with the tech leaders.</Text>
            </Flex>
            <Flex alignItems={ 'flex-start' }>
              <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
              <Text ml='10px' color={ 'gray.400' }>Subscribe to our weekly newsletter and stay upto date with the tech updates about the region.</Text>
            </Flex>
          </Stack>
        </SimpleGrid>

        <Flex flexDirection={['column', 'column', 'row', 'row']} bg='gray.800' rounded='7px' p='20px' mt='30px' alignItems={ ['flex-start', 'flex-start', 'center', 'center'] } justifyContent='space-between'>
          <Box>
            <Heading fontSize='27px' mb='8px' color='white' >Get an invite</Heading>
            <Text color='gray.400'>Submit your details and we will send you the invite shortly.</Text>
          </Box>
          <Box mt={['15px', '15px', 0, 0]}>
            <Button px='20px' bg='yellow.400' borderRadius='20px'>Join the Community</Button>
          </Box>
        </Flex>
      </Box>

      <Box mt='90px'>
        <Heading mb='7px' className='yellow-gradient-color' color='gray.100'>FAQs</Heading>
        <Text color='gray.400'>Feel free to reach out if there is something we haven't answered</Text>

        <SimpleGrid columns={[1, 1, 2, 2 ]} mt='50px' gridGap={ ['25px', '25px', '60px', '60px'] }>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>Who can join?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>Do you organize meetups?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>Can I give a talk?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>Do you have a Slack or Discord?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>What's in the newsletter?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>Can I invite my friends?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>How is this website built?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
          <Box>
            <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>Can I contribute to the project?</Heading>
            <Text lineHeight='27px' color='white'>We aim to strengthen the developer community in the region by bringing them on a single platform.</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
