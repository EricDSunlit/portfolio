import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import VoxelSnowman from '../voxel-snowman.js'
import NoSsr from '../no-ssr.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eric Nieves - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelSnowman />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
