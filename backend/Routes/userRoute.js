import express from 'express'
import { registerController } from '../controler/userController.js'
const router = express.Router()

router.post('/register', registerController)

router.post('/login', (req , res)=>{
  res.status(200).json("heloo logmuk")
})
export default router