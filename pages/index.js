import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a developer based in Dominican Republic!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Eric Nieves
            </Heading>
            <p>Software Engenier ( Mobile / Web / Future writer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ericsphoto.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            My profile
          </Heading>
          <Paragraph>
            Web / Mobile developer and system engineering term student with the
            aim of using their academic and personal skills to make
            contributions inside and outside the work environment, and get the
            appropriate knowledge to make quality applications.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Santo Domingo, Dominican Republic.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed Advance english course at the Instituto Cultural Domínico
            Americano (ICDA).
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at Bitlogy as web & mobile frontend developer.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed computer science engineering at Universidad Nacional Pedro
            Henríquez Ureña (UNPHU).
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Works at DTS - Higher Results as SAP developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          Denisse, Anime, Manga, Write, Voleyball, Music, Food, Technology,
          Physics.
        </Section>
      </Container>
    </Layout>
  )
}
