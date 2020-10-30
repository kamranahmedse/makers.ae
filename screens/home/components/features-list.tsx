import { Box, Link, SimpleGrid, Stack, Text } from '@chakra-ui/core';
import { FeatureListItem } from './features-list-item';

export function FeaturesList() {
  return (
    <SimpleGrid gridTemplateColumns={ ['1fr', '1fr', '1fr 400px', '1fr 400px'] }>
      <Box mb={ ['20px', '20px', 0, 0] }>
        <Text lineHeight='32px' mb='20px' fontWeight={ 600 } color='gray.200' fontSize='20px'>There are some really talented developers and designers in the region but unlike Europe and America, the community isn't really strong here in UAE. With makers.ae our aim is to bring all the makers of the region together under one umbrella
          and to facilitate growth.</Text>
        <Text lineHeight='32px' fontWeight={ 600 } color='gray.200' fontSize='20px'>The project is fully open-source, there is no fees or any hidden agendas. Goal is to empower the makers in the region.</Text>
      </Box>
      <Stack marginLeft={ [0, 0, '40px', '40px'] }>
        <FeatureListItem>
          Join <Link fontWeight={600} color={'yellow.300'} _hover={{ textDecoration: 'none', color: 'yellow.400', }}>our Discord</Link> to get connected with other makers in the region
        </FeatureListItem>
        <FeatureListItem feature={ 'Bi-weekly sessions on interesting topics.' } />
        <FeatureListItem feature={ 'Learn about the tech stack and how the companies in the region are working.' } />
        <FeatureListItem feature={ 'Find yourself a mentor, ask for advice..' } />
        <FeatureListItem feature={ 'Interviews with the tech leaders.' } />
        <FeatureListItem>
          Subscribe to our <Link fontWeight={600} color={'yellow.300'} _hover={{ textDecoration: 'none', color: 'yellow.400', }}>weekly newsletter</Link> and stay upto date with the tech updates about the region.
        </FeatureListItem>
      </Stack>
    </SimpleGrid>
  );
}
