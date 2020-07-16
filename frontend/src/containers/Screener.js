import React, { useState, useEffect } from 'react'

import { fetchScreener } from '../utils/api'
import Loading from '../components/Loading'
import Alert from '../components/Alert'
import Assessment from '../components/Assessment'

function Screener() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [screener, setScreener] = useState(null)

  const handleSubmit = answers => {
    console.log('Submit', answers)
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data } = await fetchScreener()

        setScreener(data)
      } catch (err) {
        setError(`Error in loading screener: ${err.toString()}`)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <>
      <Loading loading={loading} />

      {error && <Alert severity="error">{error}</Alert>}

      {screener && <Assessment assessment={screener} onSubmit={handleSubmit} />}
    </>
  )
}

export default Screener
