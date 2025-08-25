
import express from 'express'
import { changeForgotPassowrd, forgotPassword, login, register, verifyOtp } from '../Controller/auth.controller.js';
import upload from '../middleware/multiconfig.js';

const router = express.Router();

router.post('/login', login)
router.post('/register', upload.single('profile'), register)
router.post('/verify-otp',verifyOtp)
router.post('/forgot-password',forgotPassword)
router.post('/update-forgot-passwprd',changeForgotPassowrd)
export default router; 
