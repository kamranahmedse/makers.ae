import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/core";
import { MembersListItem } from "./members-list-item";
import { useState } from "react";
import Link from "next/link";
import members from "../members.json";

export function MembersList() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        mt="40px"
        gridGap="15px"
        position="relative"
        maxHeight={isExpanded ? undefined : "750px"}
        overflow="hidden"
        className="hover-grayscale"
      >
        {members.map((member) => (
          <MembersListItem {...member} />
        ))}
        {!isExpanded && (
          <Box
            opacity={1}
            pointerEvents="none"
            position="absolute"
            bottom={0}
            height="200px"
            width="100%"
            background="linear-gradient(180deg, transparent, black)"
          />
        )}
      </SimpleGrid>
      <Flex
        alignItems="center"
        mt={isExpanded ? "40px" : "20px"}
        justifyContent="center"
      >
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          bg="yellow.400"
          rounded="20px"
          px="30px"
          boxShadow="none"
          outline="none"
        >
          {!isExpanded && <>Show all &darr;</>}
          {isExpanded && <>Show less &uarr;</>}
        </Button>
        <Link href="/join">
          <a>
            <Text as="span" color="gray.400" ml="20px">
              Become a member
            </Text>
          </a>
        </Link>
      </Flex>
    </Box>
  );
}
