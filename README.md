# theseashore.github.io

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 8080
const mongodb_url = process.env.MONGODB_URL

app.use(cors({
  origin: ['http://localhost:8000', 'http://localhost:8080'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.post('/createProduct/', (req, res) => {
  Product.create(req.body)
    .then(result => res.json(result))
    .catch(err => { console.log(err) })
  // try {
  //   const product = await Product.create(req.body)
  //   res.status(200).json(product)
  // }
  // catch (error) {
  //   res.status(500).json({ message: error.message })
  // }
})

mongoose.connect(mongodb_url)
  .then(() => {
    app.listen(port, () => { console.log('Local Server running on PORT:', port) })
    console.log('Connected to mongodb!')
  })
  .catch(err => { console.log('Error Connection') })