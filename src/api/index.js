import axios from 'axios'

const BASE_URL = 'https://covidnigeria.herokuapp.com/api'

export const API = axios.create({
  baseURL: BASE_URL
})
