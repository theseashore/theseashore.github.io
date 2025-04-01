import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

import 'dotenv/config'

const app = express()
const port = process.env.PORT || 8080

const salt = 10

const db = mysql.createConnection({
  host: '192.185.17.41',
  user: 'webadmin_chinabank',
  password: 'chinaAdmin!',
  database: 'webadmin_crud'
})

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'react2'
// })

db.connect()

// app.use(cors())
app.use(cors({
  origin: ['http://localhost:8000', 'http://localhost:8080', 'https://theseashore.github.io', 'https://theseashore-github-io.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('server/')
})

app.get('/getuser/', (_req, res) => {
  const q = 'select * from users'
  db.query(q, (err, result) => {
    if (err) return res.json(err)
    return res.json(result)
  })
})

app.post('/register/', (req, res) => {
  const q = 'insert into login (`username`,`password`) values  (?)'
  const values = [
    req.body.username,
    req.body.password,
  ]
  db.query(q, [values], (err, result) => {
    if (err) return res.json(err)
    if (result) {
      return res.json({ Status: 'Success' })
    } else {
      return res.json({ Message: 'Invalid' })
    }
  })
})

app.post('/login/', (req, res) => {
  const q = 'select * from login where `username`=? AND `password`=?'
  const values = [
    req.body.username,
    req.body.password,
  ]
  db.query(q, [...values], (err, result) => {
    if (err) return res.json(err)
    if (result.length > 0) {
      return res.json({ Status: 'Success' })
    } else {
      return res.json({ Message: 'Invalid' })
    }
  })
})

app.listen(port, () => { console.log('Local Server running on PORT:', port) })