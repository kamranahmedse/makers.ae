import { Box, Link, SimpleGrid, Stack, Text } from '@chakra-ui/core';
import { FooterSignup } from './footer-signup';

export function PageFooter() {
  return (
    <SimpleGrid flexDirection='column-reverse' gridTemplateColumns={ ['1fr', '1fr', '1fr 1fr', '1fr 1fr'] } borderTopWidth={ 2 } mt='70px' mb='100px' borderTopColor='gray.900' pt='20px'>
      <Box d={['block', 'block', 'none', 'none']} mb='30px'>
        <FooterSignup />
      </Box>
      <Box>
        <SimpleGrid columns={ [1, 1, 2, 2] }>
          <Stack mb={['10px', '10px', 0, 0]}>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Contact us</Link>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Feedback</Link>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Contribute</Link>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Members</Link>
          </Stack>
          <Stack>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Speak at Event</Link>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Join Community</Link>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>Sponsor us</Link>
            <Link fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>FAQs</Link>
          </Stack>
        </SimpleGrid>
        <Text mt='20px' color='gray.500'>Made with 🧡 by <Link fontWeight={ 600 } color={ 'gray.400' } _hover={ { textDecoration: 'none', color: 'yellow.400' } }>Kamran Ahmed</Link> in Dubai, UAE</Text>
      </Box>
      <Box d={['none', 'none', 'block', 'block']}>
        <FooterSignup />
      </Box>
    </SimpleGrid>
  );
}
