import express from 'express';
import { boardData, updatedBoardData } from '../controllers/boardApi.js';


const boardRouter=express.Router();


boardRouter.post('/boards',boardData)
boardRouter.put('/boards/:id',updatedBoardData)

export default boardRouter;