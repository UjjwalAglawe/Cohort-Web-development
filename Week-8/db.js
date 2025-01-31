const {Schema, default: mongoose}=require("mongoose");
const ObjectId=mongoose.Types.ObjectId;

console.log("Connected to");

// mongoose.connect("mongodb+srv://tsukuyomi0055:JgfzResHDxh4cSeg@cluster0.cmp6v.mongodb.net/course-app");

const userSchema=Schema({
    email: {type: String , unique:true},
    password:String,
    firstName:String,
    lastName:String,
})

const adminSchema=Schema({
    email: {type: String , unique:true},
    password:String,
    firstName:String,
    lastName:String,
})

const courseSchema=Schema({
    title:String,
    desciption:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
});

const purchaseSchema=Schema({
    userId:ObjectId,
    course:ObjectId
})


const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}