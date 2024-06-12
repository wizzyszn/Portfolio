const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const portfolioRoute = require('./routers/porfolioRoutes')
//middleware
app.use(cors())

require('dotenv').config()
const downloadPath = '/files/Resume-Wisdom-Olubayo.pdf'
dotenv.config();
app.use(express.json())
app.use('/api/portfolio', portfolioRoute)
app.get('/download', (req,res) =>{
    res.setHeader('Content-Dispositon', 'attachment; filemane="resume.pdf"')
    res.status(200).sendFile(__dirname + downloadPath, (err) =>{
        if(err){
        res.status(400).json({error : err})
        }
    } )
})
 mongoose.connect(process.env.MONGODB_URL).then(() =>{
    app.listen(process.env.PORT, ()=>{
        console.log("connected to mongodb")
        console.log(`listening on port : ${process.env.PORT}`)
    })
 }).catch((err) =>{
    console.log(er)
 })


