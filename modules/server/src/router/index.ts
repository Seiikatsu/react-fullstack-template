import { Router } from 'express';
import home from './home';
import env from './env';
import person from './person';

const routes: Array<Router> = [home, env, person];

export default routes;
