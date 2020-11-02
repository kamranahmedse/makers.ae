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

      <form method='post' action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSchU6KKhFoSWk_cAgjyRXUh4oNKQQbvO5ZjmDBqrJisA76qIg/formResponse'>
        <Stack maxW='450px' mx='auto' mt='50px' mb='190px' spacing='24px'>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>Your name</Text>
            <Input name='entry.1894430675' height='50px' bg='gray.900' isRequired _placeholder={ { color: 'gray.600' } } placeholder='What should we call you?' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>Your email</Text>
            <Input name='entry.1808449400' type='email' isRequired height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='How should we get in touch with you?' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>Current City / Country</Text>
            <Input name='entry.637838521' height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Where are you located?' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>Linked In URL</Text>
            <Input name='entry.811390789' height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Share your LinkedIn profile' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>Twitter URL</Text>
            <Input name='entry.202131812' type='url' height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Share your Twitter profile' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>GitHub URL</Text>
            <Input name='entry.947327001' type='url' height='50px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='Share your GitHub profile URL' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Box>
            <Text mb='8px' color='gray.400' fontWeight={ 600 }>Short Description</Text>
            <Textarea name='entry.1903687400' height='150px' bg='gray.900' _placeholder={ { color: 'gray.600' } } placeholder='This will show up on your profile page' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          </Box>
          <Button type='submit' height={ '50px' } bg='yellow.400'>Get Invite</Button>
        </Stack>
      </form>
      <PageFooter />
    </>
  );
}
