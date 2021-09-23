require('dotenv').config()
const jwt = require('jsonwebtoken')

const TOKEN_KEY = process.env.JWT_SECRET_KEY

// const token = jwt.sign({ nama: 'riza dwi', umur: 20 }, TOKEN_KEY, {
//   expiresIn: 1800
// })

// console.log(token)
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hIjoicml6YSBkd2kiLCJ1bXVyIjoyMCwiaWF0IjoxNjMyNDA4NDEyLCJleHAiOjE2MzI0MTAyMTJ9.E2is53XNfxrZu6REgVxxguM270TNYgVd-udqDvX1LHU'

try {
  const result = jwt.verify(token, TOKEN_KEY)
  console.log('valid', result)
} catch (error) {
  console.error(error)
}
