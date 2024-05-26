import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Recent Posts</Heading>
              <VStack align="start" mt={4}>
                <Link href="#">Post 1</Link>
                <Link href="#">Post 2</Link>
                <Link href="#">Post 3</Link>
              </VStack>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Categories</Heading>
              <VStack align="start" mt={4}>
                <Link href="#">Category 1</Link>
                <Link href="#">Category 2</Link>
                <Link href="#">Category 3</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" mt={8} p={4}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <Link href="#" isExternal><FaFacebook /></Link>
            <Link href="#" isExternal><FaTwitter /></Link>
            <Link href="#" isExternal><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;