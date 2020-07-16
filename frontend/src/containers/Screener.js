import React, { useState, useEffect } from 'react'

import {
  fetchScreener as fetchScreenerApi,
  evalulateScreener as evalulateScreenerApi,
} from '../utils/api'
import Loading from '../components/Loading'
import Alert from '../components/Alert'
import Assessment from '../components/Assessment'

function Screener() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [screener, setScreener] = useState(null)
  const [nextAssessments, setNextAssessments] = useState(null)

  const handleSubmit = async answers => {
    try {
      setLoading(true)
      setError(null)

      const { data } = await evalulateScreenerApi(
        answers.map(({ questionId, value }) => ({
          question_id: questionId,
          value,
        }))
      )

      setNextAssessments(data.results)
    } catch (error) {
      setError(`Error in evaluating screener: ${error.toString()}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchScreener = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data } = await fetchScreenerApi()

        setScreener(data)
      } catch (error) {
        setError(`Error in loading screener: ${error.toString()}`)
      } finally {
        setLoading(false)
      }
    }

    fetchScreener()
  }, [])

  return (
    <>
      <Loading loading={loading} />

      {error && <Alert severity="error">{error}</Alert>}

      {screener && (
        <Assessment
          assessment={screener}
          nextAssessments={nextAssessments}
          onSubmit={handleSubmit}
        />
      )}
    </>
  )
}

export default Screener
