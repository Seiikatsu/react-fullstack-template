import { Router } from 'express';
import controller from '../controller';

const router: Router = Router();

router.post('/getEnv', controller.env.getEnv);

export default router;
