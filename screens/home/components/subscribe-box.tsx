import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core';
import Link from 'next/link';

export function SubscribeBox() {
  return (
    <Flex flexDirection={ ['column', 'column', 'row', 'row'] } bg='gray.800' rounded='7px' p='20px' alignItems={ ['flex-start', 'flex-start', 'center', 'center'] } justifyContent='space-between'>
      <Box>
        <Heading fontSize='27px' mb='8px' color='white'>Get an invite</Heading>
        <Text color='gray.400'>Submit your details and we will send you the invite shortly.</Text>
      </Box>
      <Box mt={ ['15px', '15px', 0, 0] }>
        <Link href={ '/join' }>
          <a>
            <Text px='20px' bg='yellow.400' borderRadius='20px' as={ Button }>Join the Community</Text>
          </a>
        </Link>
      </Box>
    </Flex>
  );
}
