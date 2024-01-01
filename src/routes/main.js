const express= require('express')
const{ route } = require('express/lib/application')

const Details =require("../models/Details")

const routes= express.Router()

routes.get("/",(req,res)=> {
    
    //Details.findOne({"_id:"})
    
    res.render("index")
})

routes.get('/gallery',(req,res)=>{
    res.render("gallery")
})

routes.get('/index',(req,res)=>{
    res.render("index")
})


routes.get('/contact',(req,res)=>{
    res.render("contact")
})

module.exports = routes