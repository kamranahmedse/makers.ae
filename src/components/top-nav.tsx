import { Box, Button, Flex, Text } from '@chakra-ui/core';

export function TopNav() {
  return (
    <Flex justifyContent='space-between' alignItems='center' mb={ '40px' }>
      <Box>
        <Text d={ ['none', 'block', 'block', 'block'] } color='gray.500' fontSize='16px' fontWeight={ 600 }>Developers and designers in UAE</Text>
        <Text d={ ['block', 'none', 'none', 'none'] } color='gray.500' fontSize='16px' fontWeight={ 600 }>Makers in UAE</Text>
      </Box>
      <Box>
        <Button bg='yellow.400' rounded='20px' px='35px'>Join</Button>
      </Box>
    </Flex>
  );
}
