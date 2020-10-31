import { Box, Link as ChakraLink, SimpleGrid, Stack, Text } from '@chakra-ui/core';
import { FooterSignup } from './footer-signup';
import siteConfig from '../configs/site-config';
import Link from 'next/link';

type ExternalFooterLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
};

const ExternalFooterLink = (props: ExternalFooterLinkProps) => {
  const { href, text, isExternal = true } = props;

  return (
    <ChakraLink _focus={ { outline: 'none', boxShadow: 'none' } } href={ href } target={ isExternal ? '_blank' : '_self' } fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>
      { text }
    </ChakraLink>
  );
};

type InternalFooterLinkProps = {
  href: string;
  text: string;
};

const InternalFooterLink = (props: InternalFooterLinkProps) => {
  const { href, text } = props;

  return (
    <Link href={ href }>
      <a>
        <ChakraLink _focus={ { outline: 'none', boxShadow: 'none' } } as='span' fontWeight={ 500 } color='gray.500' _hover={ { color: 'gray.100', textDecoration: 'none' } }>{ text }</ChakraLink>
      </a>
    </Link>
  );
};

export function PageFooter() {
  return (
    <SimpleGrid flexDirection='column-reverse' gridTemplateColumns={ ['1fr', '1fr', '1fr 1fr', '1fr 1fr'] } borderTopWidth={ 2 } mt='70px' mb='100px' borderTopColor='gray.900' pt='20px'>
      <Box d={ ['block', 'block', 'none', 'none'] } mb='30px'>
        <FooterSignup />
      </Box>
      <Box>
        <SimpleGrid columns={ [1, 1, 2, 2] }>
          <Stack mb={ ['10px', '10px', 0, 0] }>
            <Text as='span'><ExternalFooterLink href='mailto:kamranahmed.se@gmail.com' text='Contact us' /></Text>
            <Text as='span'><ExternalFooterLink href={ siteConfig.repo.issuesUrl } text='Feedback' /></Text>
            <Text as='span'><ExternalFooterLink href={ siteConfig.repo.url } text='Contribute' /></Text>
            <Text as='span'><ExternalFooterLink href={ '/#community-members' } isExternal={ false } text='Members' /></Text>
          </Stack>
          <Stack>
            <Text as='span'><ExternalFooterLink href='mailto:kamranahmed.se@gmail.com' text='Speak at Event' /></Text>
            <Text as='span'><InternalFooterLink href='/join' text='Join Community' /></Text>
            <Text as='span'><ExternalFooterLink href='mailto:kamranahmed.se@gmail.com' text='Sponsor us' /></Text>
            <Text as='span'><ExternalFooterLink href={ '/#faqs' } isExternal={ false } text='FAQs' /></Text>
          </Stack>
        </SimpleGrid>
        <Text mt='20px' color='gray.500'>Made with 🧡 by <ChakraLink _focus={ { boxShadow: 'none', outline: 'none' } } target='_blank' href={ siteConfig.author.twitter } fontWeight={ 600 } color={ 'gray.400' } _hover={ { textDecoration: 'none', color: 'yellow.400' } }>Kamran Ahmed</ChakraLink> in Dubai, UAE</Text>
      </Box>
      <Box d={ ['none', 'none', 'block', 'block'] }>
        <FooterSignup />
      </Box>
    </SimpleGrid>
  );
}
