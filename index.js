var cors = require('cors')
const express = require('express')
const app = express()
const port = 3999
const routes = require('./routes/index')

app.use(cors())
app.use(express.json())
require('./database/database.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})