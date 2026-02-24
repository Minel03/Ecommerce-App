import express from 'express';
import {
  addToCart,
  getUserCart,
  updateCart,
} from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

cartRoute.get('/get', authUser, getUserCart);
cartRoute.post('/add', authUser, addToCart);
cartRoute.post('/update', authUser, updateCart);

export default cartRouter;
