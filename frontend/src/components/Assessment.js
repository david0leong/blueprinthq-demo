import React, { useState, useMemo } from 'react'
import Typography from '@material-ui/core/Typography'
import get from 'lodash/get'
import flatten from 'lodash/flatten'

import Alert from './Alert'
import Question from './Question'
import NextAssessments from './NextAssessments'

function Assessment({ assessment, nextAssessments, onSubmit }) {
  const questions = useMemo(
    () =>
      flatten(
        get(assessment, 'content.sections', []).map(section => {
          const { questions, ...rest } = section

          return questions.map(question => ({
            ...question,
            section: rest,
          }))
        })
      ),
    [assessment]
  )
  const [answers, setAnswers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const isLastQuestion = useMemo(
    () => currentQuestionIndex === questions.length - 1,
    [questions, currentQuestionIndex]
  )
  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [
    questions,
    currentQuestionIndex,
  ])

  const renderContent = () => {
    if (nextAssessments) {
      return <NextAssessments assessments={nextAssessments} />
    }

    if (questions.length === 0) {
      return <Alert severity="warning">There are no questions!</Alert>
    }

    return (
      currentQuestion && (
        <Question
          question={currentQuestion}
          isLast={isLastQuestion}
          onSubmit={handleAnswer}
        />
      )
    )
  }

  const handleAnswer = answer => {
    const newAnswers = [...answers, answer]

    setAnswers(newAnswers)

    if (isLastQuestion) {
      onSubmit(newAnswers)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  return (
    <>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        {assessment.content.display_name}({assessment.full_name})
      </Typography>

      {renderContent()}
    </>
  )
}

export default Assessment
