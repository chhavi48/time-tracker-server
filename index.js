const express=require("express")
const cors=require("cors")
const connection=require("./storage/db")

const app=express()

const authRouter=require("./controller/User.AuthController")
const userRoute=require("./Route/user")
require("dotenv").config()
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors({}))    
app.get("/",(req,res)=>{
    res.send("Home") 
}) 

app.use("/auth",authRouter)   
app.use("/profile",userRoute)
   
app.listen(process.env.PORT||8080,async()=>{
    await connection;
    console.log("connected to db")
    console.log(` server is runnig ${process.env.PORT}`)
})