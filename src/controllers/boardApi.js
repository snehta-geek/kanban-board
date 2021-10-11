import mongoose from 'mongoose';
import Board from '../model/board.js';
import Seqence from '../model/sequence.js';



export const boardData = async (req, res) => {
  try {
    const { title } = req.body 

    
const a=new Seqence({title}).save()

    const data = new Board({
      title    
    })   
    const newBoardData = await data.save()
   
    if(newBoardData){
      res.status(201).send(newBoardData)
    }
    else{
      res.status(400).send({}) 
    }


  } catch (error) {
    return res.send(error);
  }
}

export const updatedBoardData = async (req, res) => {
  try {
    const { stage } = req.body
    const getData = await Board.findOne({ id: req.params.id })
    if (stage === 1 || stage === 2 || stage === 3) {
      getData.stage = stage
      const upData = await getData.save()
      res.status(200).send(upData)
    } else {
      res.status(400).send({})
    }
  } catch (error) {
    return res.send(error);
  }
}