import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Servidor Express básico corriendo! ')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
