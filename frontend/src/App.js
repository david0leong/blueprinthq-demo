import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Screener from './containers/Screener'

function App() {
  return (
    <Container fixed>
      <Box my={4}>
        <Screener />
      </Box>
    </Container>
  )
}

export default App
