import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  res.json('Eita!')
})

app.listen(3000)