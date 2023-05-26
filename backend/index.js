const express=require("express")
const cors=require("cors")
const { Connection } = require("./Configuration/db")
const { UserRoute } = require("./Routes/User")
const { PostCarRoute } = require("./Routes/PostCar")
const { OemRouter } = require("./Routes/OEM")


require("dotenv").config()

const PORT= process.env.PORT || 8000

const app=express()

app.use(cors())
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Welcome To Big-Blow")
})


// User Route //
app.use("/user",UserRoute)
app.use("/sellcar",PostCarRoute)
app.use("/oem",OemRouter)

app.listen(PORT, async()=>{
    try{
   await Connection
   console.log('Connected To Database')
   console.log(`server is running at http://localhost:${PORT}`)
    }
    catch(err){
        console.log(`Error while connecting to Database ${err}`)
    }
})