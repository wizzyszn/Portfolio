const mongoose = require('mongoose')
const Portfolio = require("../models/projectsModel")


//create a portfolio
module.exports.createPorfolio = async(req,res,next) =>{
    const {title,skills,description,role,rating,link,imagesDir } = req.body;
    try{
        const portfolio= await Portfolio.findOne({title});
        if(portfolio){
            return res.status(400).json({message : "message already exists"});
        }
        // if it doesnt exist, create a new document
        const document = await Portfolio.create({
            skills,
            description,
            role,
            imagesDir,
            rating,
            title,
            link
        });
        return res.status(200).json(document); 

    }catch(err){
        console.log(err);
        res.status(500).json({message : "An error occured"})
    }
}
//fetch all portfolios
module.exports.getPortfolios = async(req,res,next) =>{
    try{
        const portfolios = await Portfolio.find()
        if(!portfolios){
            return res.status(400).json({message : "No projects at the moment"});
        }

        return res.status(200).json(portfolios); 

    }catch(err){
        console.log(err);
        res.status(500).json({message : "An error occured"})
    }
}
//get a specific portfolio
module.exports.getOnePortfolio = async (req,res,next) =>{
    const {id}  = req.params;

         try{
            const portfolio =await Portfolio.findById({_id : id});
            if(!portfolio){
             return res.status(400).json({message : "Document not found"})   
            }
            return res.status(200).json([portfolio]);
         }catch(err){
            console.log(err);
            return res.status(500).json({message : err.message})
         }
}
//get other portfolios
module.exports.getOtherPortfolios = async (req,res,next) =>{
    try{
        const {id} = req.params
        const portfolios =await Portfolio.find({_id : {$ne :id }});
        if(!portfolios){
            return res.status(400).json({message: "Documents not found"})
        }
        return res.status(200).json(portfolios);
    }catch(err){
        console.log(err);
        res.status(500).json({message :'Something went wrong'})
    }
}