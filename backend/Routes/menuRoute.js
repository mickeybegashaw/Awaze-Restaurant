import express from 'express';
import multer from 'multer';
import { getAllMenu, createMenu, updateMenu, deleteMenu } from '../controler/menuController.js';
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', getAllMenu);

router.post('/',  upload.single('image') ,createMenu);

router.patch('/:id', updateMenu);

router.delete('/:id', deleteMenu);

export default router;