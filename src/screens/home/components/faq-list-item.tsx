import { Box, Heading, Text } from '@chakra-ui/core';

type FaqListItemProps = {
  title: string;
  description: string;
};

export function FaqListItem(props: FaqListItemProps) {
  const { title, description } = props;

  return (
    <Box>
      <Heading as='h2' mb='10px' fontSize='24px' className='purple-gradient-color'>{ title }</Heading>
      <Text lineHeight='27px' color='white'>{ description }</Text>
    </Box>
  );
}
