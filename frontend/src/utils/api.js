import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const fetchScreener = () => axiosInstance.get('screener/')

export const evalulateScreener = answers =>
  axiosInstance.post('screener/evaluate/', { answers })
