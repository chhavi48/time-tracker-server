const User=require("../Model/AuthModel")
const {Router}=require("express")
const Feed=require("../Model/Feed")

const userRouter=Router();


userRouter.get("/:userId",async(req,res)=>{
    const {userId}=req.params;
    const user=await User.findById({userId})
    if(user){
    res.send(user)
    }
    else{
        res.status(404).send({message:"user not found"})
    }
    
})
userRouter.get("/:userId/feed",async (req,res)=>{
    const {userId}=req.params;
    const feeds=await Feed.find({userId});
     
     console.log(feeds)
    return res.send(feeds)
})
userRouter.post("/:userId/feed",async (req,res)=>{
    const {userId}=req.params;
    const {title,description,tags}=req.body;

    

    const feed=new Feed({
        title,
        description,
        tags,
    
        userId
})
    await feed.save();
    return res.send("success")
     


})


module.exports=userRouter;