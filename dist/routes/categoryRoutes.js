import express from 'express';
import { getCategories, createCategory } from '../controllers/categoryController.js';
const router = express.Router();
// שליפת כל הקטגוריות עם הפריטים שלהן
router.get('/', getCategories);
// יצירת קטגוריה חדשה
router.post('/', createCategory);
export default router;
