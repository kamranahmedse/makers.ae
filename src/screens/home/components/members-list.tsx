import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/core';
import { useState } from 'react';
import Link from 'next/link';
import { MemberType } from '../../../api/members';
import { MembersListItem } from './members-list-item';

type MembersListProps = {
  members: MemberType[]
};

export function MembersList(props: MembersListProps) {
  const { members } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box>
      <SimpleGrid columns={ [1, 3, 5, 6] } mt='40px' gridGap='10px' position='relative' maxHeight={ isExpanded ? undefined : '450px' } overflow='hidden' className='hover-grayscale'>
        { members.map(member => (
          <MembersListItem
            key={ member.username }
            username={ member.username }
            title={ member.title }
            designation={ member.designation }
            company={ member.company }
            imageUrl={ member.imageUrl }
            joinDate={ member.joinDate }
          />
        )) }
        { !isExpanded && (
          <Box
            opacity={ 1 }
            pointerEvents='none'
            position='absolute'
            bottom={ 0 }
            height='200px'
            width='100%'
            background='linear-gradient(180deg, transparent, black)'
          />
        ) }
      </SimpleGrid>

      <Flex alignItems='center' mt={ isExpanded ? '40px' : '20px' } justifyContent='center'>
        <Button onClick={ () => setIsExpanded(!isExpanded) } bg='yellow.400' rounded='20px' px='30px' boxShadow='none' outline='none'>
          { !isExpanded && <>Show all &darr;</> }
          { isExpanded && <>Show less &uarr;</> }
        </Button>
        <Link href='/join'>
          <a>
            <Text d={['none', 'none', 'inline', 'inline']} as='span' color='gray.400' ml='20px'>Become a member</Text>
            <Text d={['inline', 'inline', 'none', 'none']} as='span' color='gray.400' ml='20px'>Join now</Text>
          </a>
        </Link>
      </Flex>
    </Box>
  );
}
