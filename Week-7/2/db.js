const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const ObjectId=mongoose.ObjectId;


const User=Schema({
    email: {type: String,unique:true},
    password: String,
    name: String
});

const Todo=Schema({
    done: Boolean,
    userId:ObjectId,
    title: String
});

const UserModel=mongoose.model('users',User);  //users colletion wehre i have to put the data and using User schema
const TodoModel=mongoose.model('todos',Todo);

module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}