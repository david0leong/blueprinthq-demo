import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Alert from './Alert'

const useStyles = makeStyles(theme => ({
  question: {
    fontSize: '1.25rem',
  },
}))

function Question({ question, onSubmit }) {
  const classes = useStyles({})

  const handleAnswer = value => {
    onSubmit({
      questionId: question.id,
      value,
    })
  }

  return (
    <Paper elevation={3}>
      <Box p={4}>
        <Alert className={classes.question} icon={false}>
          {question.section.title}
        </Alert>

        <Box textAlign="center">
          <Box my={4}>
            <Typography variant="h5">{question.title}</Typography>
          </Box>

          {question.section.answers.map(answer => (
            <Box key={answer.value} mb={2}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                fullWidth
                onClick={() => handleAnswer(answer.value)}
              >
                {answer.title}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  )
}

export default Question
