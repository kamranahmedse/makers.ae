import Image from 'next/image';
import { Box, Heading, Link, Text } from '@chakra-ui/core';

type MembersListItemProps = {
  title: string;
  designation: string;
  company: string;
  imageUrl: string;
};

export function MembersListItem(props: MembersListItemProps) {
  const { company, designation, imageUrl, title } = props;

  return (
    <Link bg='gray.900' rounded='10px' _hover={{ bg: 'gray.800'}}>
      <Image className='member-grid-img' unsized src={ imageUrl } />
      <Box px='10px' py='15px'>
        <Heading color='gray.100' mb='7px' fontSize='18px'>{ title }</Heading>
        <Text color='gray.500' fontSize='14px'>{ designation } @ <Text as='span' color='gray.100'>{ company }</Text></Text>
      </Box>
    </Link>
  );
}
