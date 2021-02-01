const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('/',(req,res)=>{
    app.render('index.html')
})
const port = process.env.PORT || 4040
app.listen(port,()=>{
    console.log('Server is running')
})