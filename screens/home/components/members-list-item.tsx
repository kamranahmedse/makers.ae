import { Box, Heading, Image, Link, Skeleton, Text } from '@chakra-ui/core';
import ProgressiveImage from 'react-progressive-image';

type MembersListItemProps = {
  title: string;
  designation: string;
  company: string;
  imageUrl: string;
};

export function MembersListItem(props: MembersListItemProps) {
  const { company, designation, imageUrl, title } = props;

  return (
    <Link bg='gray.900' rounded='10px' _hover={ { bg: 'gray.800' } }>
      <ProgressiveImage delay={ 500 } src={ imageUrl } placeholder='/avatars/placeholder.png'>
        { (src, loading) => {
          return loading ? (
            <Skeleton borderRadius={ '10px 10px 0 0' } height='211px' width='100%' d='block' />
          ) : (
            <Image src={ src } w='100%' borderRadius={ '10px 10px 0 0' } />
          );
        } }
      </ProgressiveImage>
      <Box px='10px' py='15px'>
        <Heading color='gray.100' mb='7px' fontSize='18px'>{ title }</Heading>
        <Text color='gray.500' fontSize='14px'>{ designation } @ <Text as='span' color='gray.100'>{ company }</Text></Text>
      </Box>
    </Link>
  );
}
