import express from 'express';
const router = express.Router();

// controller
import * as authCtrl from '../controllers/authCtrl'; 

// routes
router.post('/login', authCtrl.login);

export default router;
