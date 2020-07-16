import React, { useState, useMemo } from 'react'
import Typography from '@material-ui/core/Typography'
import get from 'lodash/get'
import flatten from 'lodash/flatten'

import AssessmentProgress from './AssessmentProgress'
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

    if (currentQuestion) {
      return <Question question={currentQuestion} onSubmit={handleAnswer} />
    }
  }

  const handleAnswer = answer => {
    const newAnswers = [...answers, answer]

    setAnswers(newAnswers)
    setCurrentQuestionIndex(currentQuestionIndex + 1)

    if (currentQuestionIndex === questions.length - 1) {
      onSubmit(newAnswers)
    }
  }

  return (
    <>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        {assessment.content.display_name}({assessment.full_name})
      </Typography>

      <AssessmentProgress
        total={questions.length}
        answered={currentQuestionIndex}
      />

      {renderContent()}
    </>
  )
}

export default Assessment
