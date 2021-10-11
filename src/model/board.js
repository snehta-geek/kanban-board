import mongoose from 'mongoose';
import Seqence from "./sequence.js";

const boardSchema=new mongoose.Schema({
    
    id:{type: Number, unique:true },
    title :{type:String, required:true},
    stage : {type:Number,default:1}
},
{
    timestamps:true,              
}
);


boardSchema.pre("save", function (next) {
    let doc = this;
    if (!this.isNew) return next();
    Seqence.findOneAndUpdate(
      { _id: "title" },
      { $inc: { id: 1 } },
      { new: true, upsert: true }
    ).then(function (count) {
      doc.id = `exp${count.id}`;
      next();
    });
  });
  const Board=mongoose.model('Board',boardSchema);
export default Board;