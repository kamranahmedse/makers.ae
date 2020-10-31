import { Box, Button, Heading, Input, Text } from '@chakra-ui/core';

export function FooterSignup() {
  return (
    <>
      <Heading fontSize='24px' mb='15px' className='yellow-gradient-color'>Be the first to know</Heading>
      <Text color='gray.400' mb='15px'>Get notified about the upcoming sessions, news, articles, jobs, and opensource projects.</Text>

      <form method='post' action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSchU6KKhFoSWk_cAgjyRXUh4oNKQQbvO5ZjmDBqrJisA76qIg/formResponse'>
        <Box position='relative'>
          <Input type='email' isRequired name='entry.1808449400' px='25px' bg='gray.900' height='50px' rounded='50px' _placeholder={ { color: 'gray.600' } } placeholder='Enter your email' _focus={ { outline: 0 } } color='gray.100' borderWidth={ 0 } />
          <Button type='submit' height='50px' color='gray.100' _hover={ { bg: 'yellow.400', color: 'gray.900' } } position='absolute' top='0' right='0' bg='gray.700' rounded='50px' px='25px'>Subscribe</Button>
        </Box>
      </form>
    </>
  );
}
