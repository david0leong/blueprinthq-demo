import React, { useState, useEffect } from 'react'

import { fetchScreener } from '../utils/api'

const Screener = () => {
  const [screener, setScreener] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      const { data } = await fetchScreener()

      setScreener(data)
    }

    loadData()
  }, [])

  console.log('screener', screener)

  return <div>Screener</div>
}

export default Screener
