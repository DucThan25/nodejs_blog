const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    var a = 1
    var b =2

    var c = a + b
    return res.send('123!')
})

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})