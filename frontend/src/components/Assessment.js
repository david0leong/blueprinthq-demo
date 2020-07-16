import React, { useState, useMemo } from 'react'
import Typography from '@material-ui/core/Typography'
import get from 'lodash/get'
import flatten from 'lodash/flatten'

import Alert from './Alert'
import Question from './Question'

function Assessment({ assessment, onSubmit }) {
  const questions = useMemo(
    () =>
      flatten(
        get(assessment, 'content.sections', []).map((section, index) => {
          const { questions, ...rest } = section

          return questions.map(question => ({
            ...question,
            section: rest,
          }))
        })
      ),
    [assessment.content.sections]
  )
  const [answers, setAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const isLastQuestion = useMemo(
    () => currentQuestionIndex === questions.length - 1,
    [questions, currentQuestionIndex]
  )
  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [
    questions,
    currentQuestionIndex,
  ])

  const renderQuestion = () => {
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

  const handleAnswer = ({ questionId, value }) => {
    setAnswers({ ...answers, [questionId]: value })

    if (isLastQuestion) {
      onSubmit(
        Object.keys(answers).map(questionId => ({
          question_id: questionId,
          value: answers[questionId],
        }))
      )
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  return (
    <>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        {assessment.content.display_name}({assessment.full_name})
      </Typography>

      {renderQuestion()}
    </>
  )
}

export default Assessment
