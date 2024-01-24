const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/pilots',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/pilots.html'))
})

app.get('/names',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/names.html'))
})

app.get('/cities',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/cities.html'))
})