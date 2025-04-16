require('dotenv').config()

const express = require("express")
const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/linkedin',(req,res)=>{
    res.send("v-vishwajeet")
})

app.get('/login', (req,res) =>{
    res.send('<h1>Hii this is h1</h1>')
})


// 3000
app.listen(process.env.PORT, () => { 
    console.log(`example listing on the port ${process.env.PORT}`)
})

// 4000
// app.listen(port, () => { 
//     console.log(`example listing on the port ${port}`)
// })
