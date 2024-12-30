import express from 'express';
import { getAllMenu, createMenu, updateMenu, deleteMenu } from '../controler/menuController.js';

const router = express.Router();

router.get('/', getAllMenu);

router.post('/', createMenu);

router.patch('/:id', updateMenu);

router.delete('/:id', deleteMenu);

export default router;