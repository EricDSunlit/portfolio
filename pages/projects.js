import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbnail_deliveroo from '../public/images/projects/thumbnail_deliveroo.jpg'
import thumbnail_pjIn from '../public/images/projects/thumbnail_pjIn.jpg'

const Projects = () => {
  return (
    <Container>
      <Heading
        as="h3"
        display={{ base: 'inline-block', md: 'none' }}
        fontSize={20}
        mb={4}
      >
        Projects
      </Heading>

      <SimpleGrid colums={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="deliveroo"
            title="Deliveroo Clone"
            thumbnail={thumbnail_deliveroo}
          >
            Food delivery mobile application clon with react native
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="pjIn"
            title="Anime characters Demo"
            thumbnail={thumbnail_pjIn}
          >
            anime character&apos;s details web app with NextJs
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
