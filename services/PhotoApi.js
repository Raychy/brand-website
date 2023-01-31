
// var secretKey = 'lSPERgyVJ-02nFFNIP-YKKr8Rvgmw3ErO6N2sJOpBT0'
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})