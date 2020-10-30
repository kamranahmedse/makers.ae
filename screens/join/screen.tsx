import { TopNav } from '../../components/top-nav';
import { PageFooter } from '../../components/page-footer';
import { Box, Button, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/core';

export function JoinScreen() {
  return (
    <>
      <TopNav />

      <Box textAlign='center' mt='90px'>
        <Heading fontSize='35px' mb='14px' className='yellow-gradient-color'>Join the Community</Heading>
        <Text color='gray.400' fontSize='17px'>Connect with others, start informed, learn, and grow</Text>
      </Box>

      <Stack maxW='450px' mx='auto' mt='50px' mb='190px' spacing='24px'>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>Your name</Text>
          <Input height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='What should we call you?' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>Your email</Text>
          <Input height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='How should we get in touch with you?' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>Current City / Country</Text>
          <Input height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Where are you located?' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>Linked In URL</Text>
          <Input height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Share your LinkedIn profile' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>Twitter URL</Text>
          <Input height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Share your Twitter profile' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>GitHub URL</Text>
          <Input height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Share your GitHub profile URL' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Box>
          <Text mb='8px' color='gray.400' fontWeight={ 600 }>Short Description</Text>
          <Textarea height='150px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='This will show up on your profile page' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
        </Box>
        <Button height={'50px'} bg='yellow.400'>Get Invite</Button>
      </Stack>
      <PageFooter />
    </>
  );
}
