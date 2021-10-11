import mongoose from 'mongoose';

const seqSchema=new mongoose.Schema({
    _id: { type: String },
    id:{type: Number, unique:true,default:1 },
    title :{type:String, required:true}
},
{
    timestamps:true,              
}
);

const Seqence=mongoose.model('Seqence',seqSchema);

export default Seqence;