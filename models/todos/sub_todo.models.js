import monogoose from 'mongoose';
const subTodoSchema = new monogoose.Schema({
  content : {
    type: String,
    required : true,
  },
  complete : {
    type : Boolean, 
    default : false,
  },
  createdBy : {
    type : monogoose.Schema.Types.ObjectId,
    ref = "User",
  }
}, { timestamps: true });

export const SubTodo = monogoose.model('SubTodo', subTodoSchema);
