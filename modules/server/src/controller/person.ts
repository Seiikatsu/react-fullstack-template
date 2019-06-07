import { Request, Response } from 'express';
import getConnection, { Entities } from '../database';
import { logError } from '../log/logger';

const { Person } = Entities;

const index = async (req: Request, res: Response) => {
	try {
		const connection = await getConnection();
		const personRepo = connection.getRepository(Person);

		const p = new Person();
		p.firstName = 'hello';
		p.lastName = 'world';
		p.age = 15;
		await personRepo.save(p);

		res.send(await personRepo.find());
	} catch (err) {
		logError(err);
	}
};

export default {
	index,
};
