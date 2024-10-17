import { Router } from 'express';
import userModel from '../models/user.model';

const router = Router();

router.get('/', (req, res) => {
    res.render('index',{});
});

export default router;