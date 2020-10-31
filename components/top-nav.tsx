import { Box, Button, Flex, Text } from '@chakra-ui/core';
import Link from 'next/link';

export function TopNav() {
  return (
    <Flex justifyContent='space-between' alignItems='center' mb={ '40px' }>
      <Box>
        <Link href='/'>
          <a><Text as='span' d={ ['none', 'block', 'block', 'block'] } color='gray.500' fontSize='16px' fontWeight={ 600 }>makers.ae</Text></a>
        </Link>
        <Text d={ ['block', 'none', 'none', 'none'] } color='gray.500' fontSize='16px' fontWeight={ 600 }>Makers in UAE</Text>
      </Box>
      <Box>
        <Link href={ '/join' }>
          <a><Button bg='yellow.400' px='35px' rounded='20px' as={ 'span' }>Join</Button></a>
        </Link>
      </Box>
    </Flex>
  );
}
