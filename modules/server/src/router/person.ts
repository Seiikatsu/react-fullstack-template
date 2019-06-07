import { Router } from 'express';
import controller from '../controller';

const router: Router = Router();

router.get('/getPersons', controller.person.index);

export default router;
