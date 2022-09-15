import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import react from '../public/images/skills/react.png'
import nextjs from '../public/images/skills/nextjs.png'
import nodejs from '../public/images/skills/nodejs.png'
import mysql from '../public/images/skills/mysql.png'
import mongodb from '../public/images/skills/mongodb.png'
import html from '../public/images/skills/html.png'
import css from '../public/images/skills/css.png'
import js from '../public/images/skills/js.png'
import ts from '../public/images/skills/ts.png'
import net from '../public/images/skills/net.png'
import angular from '../public/images/skills/angular.png'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Skills
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 3, 3]} gap={10}>
          <GridItem
            title="React"
            thumbnail={react}
            href="https://es.reactjs.org"
          />
          <GridItem
            title="NextJs"
            thumbnail={nextjs}
            href="https://nextjs.org"
          />
          <GridItem
            title="React Native"
            thumbnail={react}
            href="https://reactnative.dev"
          />
          <GridItem
            title="NodeJS"
            thumbnail={nodejs}
            href="https://nodejs.org/en/"
          />
          <GridItem
            title="MySQL"
            thumbnail={mysql}
            href="https://www.mysql.com"
          />
          <GridItem
            // title="MongoDb"
            thumbnail={mongodb}
            href="https://www.mongodb.com"
          />
          <GridItem title="HTML" thumbnail={html} href="https://html.com" />
          <GridItem
            title="CSS"
            thumbnail={css}
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <GridItem
            title=".Net"
            thumbnail={net}
            href="https://dotnet.microsoft.com/en-us/"
          />
          <GridItem
            title="TypeScript"
            thumbnail={ts}
            href="https://www.typescriptlang.org"
          />
          <GridItem
            title="JavaScript"
            thumbnail={js}
            href="https://www.javascript.com"
          />
          <GridItem
            title="Angular"
            thumbnail={angular}
            href="https://angular.io"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Skills
