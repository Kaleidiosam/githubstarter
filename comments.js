// Create web swerver
// 1. npm init
// 2. npm install express
// 3. node comments.js
// 4. http://localhost:3000/comments
// 5. http://localhost:3000/comments/1

const express = require('express')
const app = express()
const port = 3000

// http://localhost:3000/comments
app.get('/comments', (req, res) => {
    res.send('Comments')
})

// http://localhost:3000/comments/1
app.get('/comments/:id', (req, res) => {
    res.send('Comments ' + req.params.id)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})