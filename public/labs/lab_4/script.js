const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Lab 4 app listening at http://localhost:${port}`)
})