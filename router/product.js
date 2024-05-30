import express from 'express';
import {GetAllProduct} from '../controllers/product.js'
const router = express.Router();
router.get('/products',GetAllProduct)
export default router