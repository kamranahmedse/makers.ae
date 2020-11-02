import { Box, Heading, Link, Text } from '@chakra-ui/core';
import { LazyImage } from '../../../components/lazy-image';
import { MemberType } from '../../../api/members';

type MembersListItemProps = MemberType;

export function MembersListItem(props: MembersListItemProps) {
  const { company, designation, imageUrl, title } = props;

  return (
    <Link bg='gray.900' rounded='10px' _hover={ { bg: 'gray.800' } }>
      <LazyImage objectFit={ 'cover' } rounded={ '10px 10px 0 0' } skeletonHeight={ '211.25px' } minHeight='211.25px' src={ imageUrl } width='100%' />
      <Box px='10px' py='15px'>
        <Heading color='gray.100' mb='7px' fontSize='18px'>{ title }</Heading>
        <Text color='gray.500' fontSize='14px'>{ designation } @ <Text as='span' color='gray.100'>{ company }</Text></Text>
      </Box>
    </Link>
  );
}
