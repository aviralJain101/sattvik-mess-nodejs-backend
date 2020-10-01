const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const app = express()
const port = process.env.PORT || 3000

app.use(express.json) //converts incoming data from Json to javaScript object

app.listen(port,()=>{
    console.log('server is up on port',port)
})
