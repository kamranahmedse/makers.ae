import { SimpleGrid } from '@chakra-ui/core';
import { FaqListItem } from './faq-list-item';

export function FaqList() {
  return (
    <SimpleGrid columns={ [1, 1, 2, 2] } mt='50px' gridGap={ ['25px', '25px', '60px', '60px'] }>
      <FaqListItem title='Who can join?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title='Do you organize meetups?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title='Can I give a talk?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title='Do you have a Slack or Discord?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title="What's in the newsletter?" description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title='Can I invite my friends?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title='How is this website built?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
      <FaqListItem title='Can I contribute to the project?' description='We aim to strengthen the developer community in the region by bringing them on a single platform.' />
    </SimpleGrid>
  );
}
