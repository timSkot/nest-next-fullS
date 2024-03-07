import axios from 'axios'
import { getContentType } from '../utils/api.utils'

export const API_URL = `${process.env.API_APP_URL}/api`

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
