import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
  content : {
    type : String, 
    required : true,
  } ,
  complete : {
    type : Boolean,
    default : false,
  },
  createdBy : { // type and reference 
    type : mongoose.Schema.Types.ObjectId,
    ref : "User", // in user.models.js
  },
  subTodos : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref = "SubTodo",
    }
  ] // Array for Sub-Todods

}, {timestamps : true});

export const Todo = mongoose.model("Todo",todoSchema);
// in db it will be names todo (alllowercase)