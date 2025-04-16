require('dotenv').config()

const express = require("express")
const app = express()

const port = 4000

const githubdata = {

    "name": "myfirstproject",
    "version": "1.0.0",
    "description": "just a basic project and does not affact the project its just for me",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    },
    "keywords": [
        "not",
        "necessary"
    ],
    "author": "Vishwajeet",
    "license": "ISC",
    "dependencies": {
        "dotenv": "^16.5.0",
        "express": "^5.1.0"
    }
}


app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/linkedin', (req, res) => {
    res.send("v-vishwajeet")
})

app.get('/login', (req, res) => {
    res.send('<h1>Hii this is h1</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

// 3000
app.listen(process.env.PORT, () => {
    console.log(`example listing on the port ${process.env.PORT}`)
})

// 4000
// app.listen(port, () => {
//     console.log(`example listing on the port ${port}`)
// })
