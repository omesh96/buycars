
 const express=require("express")
 const requireLogin=require("../Middleware/requireLogin.js")
const { CarModel } = require("../models/PostCarmodel.js")

 const PostCarRoute=express.Router()


  // Post a second-hand car with details //

  PostCarRoute.post("/addcar",requireLogin,async(req,res)=>{
    const {images,Original_Paint,Number_of_accidents_reported,Number_of_previous_buyers,
        Registration_Place,KMs_on_Odometer,Major_Scratches,price,car_Manufacturer,model,year}=req.body

        if(!images || !Original_Paint || !Number_of_accidents_reported || !Number_of_previous_buyers ||
         !Registration_Place || !KMs_on_Odometer || !Major_Scratches || !price || !car_Manufacturer || !model || !year){
                return res.status(422).json({error:"Please Add All the fields...!"})
            }
            console.log("user3",req.user)

            const addCar=new CarModel({
                images,
                Original_Paint,
                Number_of_accidents_reported,
                Number_of_previous_buyers,
                Registration_Place,
                KMs_on_Odometer,
                Major_Scratches,
                price,
                car_Manufacturer,
                model,
                year,
                postedBy:req.user._id,
                name:req.user.name
            })

            addCar.save().then((result)=>{
                return res.status(200).json({post:result,msg:"Car Added Successfully...!"})
               })
               .catch(err=> console.log(err))
  })

  module.exports={PostCarRoute}