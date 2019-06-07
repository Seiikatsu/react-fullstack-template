import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Person {
	@PrimaryGeneratedColumn({
		name: 'id',
	})
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	age: number;
}
