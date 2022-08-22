import axios from 'axios'

const BASE_URL = 'https://covidnigeria.herokuapp.com/api'

export const axiosCall = axios.create({
  baseURL: BASE_URL
})
