import { Link } from '@chakra-ui/core';
import { LazyImage } from '../../../components/lazy-image';
import { MemberType } from '../../../api/members';

type MembersListItemProps = MemberType;

export function MembersListItem(props: MembersListItemProps) {
  const { company, designation, imageUrl, title } = props;

  return (
    <Link bg='gray.900' _hover={ { bg: 'gray.800' } }>
      <LazyImage
        objectFit={ 'cover' }
        rounded='5px'
        skeletonHeight={ '140px' }
        minHeight='140px'
        src={ imageUrl }
        width='100%'
      />
    </Link>
  );
}
