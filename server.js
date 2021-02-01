const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('/',(req,res)=>{
    app.render('index.html')
})

app.listen('4040',()=>{
    console.log('Server is running')
})