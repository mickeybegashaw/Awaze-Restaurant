import express from 'express';
import multer from 'multer';
import { getAllMenu, createMenu, updateMenu, deleteMenu } from '../controler/menuController.js';
import { requireAuth } from '../middleware/requireAuth.js';
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', getAllMenu);

router.post('/', requireAuth, upload.single('image') ,createMenu);

router.patch('/:id', requireAuth ,updateMenu);

router.delete('/:id', requireAuth ,deleteMenu);

export default router;