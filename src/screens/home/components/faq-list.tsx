import { SimpleGrid } from '@chakra-ui/core';
import { FaqListItem } from './faq-list-item';

export function FaqList() {
  return (
    <SimpleGrid columns={ [1, 1, 2, 2] } mt='50px' gridGap={ ['25px', '25px', '60px', '60px'] }>
      <FaqListItem title='Who can join?' description='The only requirement to join the community is to be a maker. You can either be a developer, a designer or a student.' />
      <FaqListItem title='Do you organize meetups?' description='Yes, we have bi-weekly meetups from the community members as well as external contributors on a variety of topics. All our sessions are done via Zoom call and are open for anyone to join.' />
      <FaqListItem title='Can I give a talk?' description="Yes! We are constantly looking for contributors, reach out to us via email or on Discord and let's make it happen." />
      <FaqListItem title='Do you have a Slack or Discord?' description='Yes, once you register, we will send you an invite to our Discord community, where you can talk to other makers in the region.' />
      <FaqListItem title="What's in the newsletter?" description='We have a bi-weekly newsletter where we share general tech updates as well as updates from the region, job openings and upcoming events.' />
      <FaqListItem title='Can I invite my friends?' description='For sure. We aim to create the biggest online community of developers in the region so we would love for you to invite your friends and colleagues.' />
      <FaqListItem title='How is this website built?' description='The website is OpenSource, it is built with Next.js and is hosted on GitHub pages. Feel free to have a look at the code and send any contributions our way.' />
      <FaqListItem title='Can I contribute to the project?' description='Yes, apart from being a part of community events, spreading the word, and inviting your friends, you can also contribute to the code. We are open for anyone to suggest, discuss and contribute to the code.' />
    </SimpleGrid>
  );
}
