import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

type FeaturesListItemProps = {
  feature?: string;
  children?: React.ReactNode
};

export function FeatureListItem(props: FeaturesListItemProps) {
  const { feature, children } = props;

  return (
    <Flex alignItems={ 'flex-start' } mb='10px'>
      <Text lineHeight='22px' fontSize='22px' color='#FF4D6A' as='span'>✓</Text>
      <Text ml='10px' color={ 'gray.400' }>{ feature || children }</Text>
    </Flex>
  );
}
