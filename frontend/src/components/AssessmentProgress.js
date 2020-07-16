import React, { useMemo } from 'react'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

function AssessmentProgress({ total, answered }) {
  const value = useMemo(() => Math.round((answered * 100) / total), [
    total,
    answered,
  ])

  return (
    <Box>
      <LinearProgress variant="determinate" value={value} />

      <Box textAlign="center" my={1}>
        <Typography variant="body2" color="textSecondary">
          Answered {answered} out of {total} questions
        </Typography>
      </Box>
    </Box>
  )
}

export default AssessmentProgress
