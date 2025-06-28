import express from 'express';
import { saveCart, getAllCarts } from '../controllers/cartController.js';

const router = express.Router();

// שמירת עגלת קניות
router.post('/', saveCart);

// שליפת כל העגלות
router.get('/', getAllCarts);

export default router;
