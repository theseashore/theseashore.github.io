import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Test Only')
})

app.listen(port, () => { console.log('Local Server running on PORT:', port) })