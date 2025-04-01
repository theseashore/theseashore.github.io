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

db.connect()

app.use(cors())
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

app.listen(port, () => { console.log('Local Server running on PORT:', port) })