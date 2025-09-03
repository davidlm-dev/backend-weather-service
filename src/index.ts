import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hola Prettier!')
})

console.log(`Servidor corriendo en http://localhost:${PORT}`)
