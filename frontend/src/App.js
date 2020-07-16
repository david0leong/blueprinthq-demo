import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Screener from './components/Screener'

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Screener />
      </Box>
    </Container>
  )
}

export default App
