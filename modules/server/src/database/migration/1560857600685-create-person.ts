import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

const PRIMARY_KEY_COLUMN: TableColumnOptions = {
	comment: 'Primary key of the person.',
	isPrimary: true,
	isGenerated: true,
	generationStrategy: 'increment',
	name: 'id',
	type: 'bigint',
};

const FIRST_NAME_COLUMN: TableColumnOptions = {
	comment: 'First name of the person.',
	isNullable: true,
	name: 'firstName',
	type: 'varchar',
	length: '100',
};

const LAST_NAME_COLUMN: TableColumnOptions = {
	comment: 'Last name of the person.',
	isNullable: true,
	name: 'lastName',
	type: 'varchar',
	length: '100',
};

const AGE_COLUMN: TableColumnOptions = {
	comment: 'Age of the person.',
	isNullable: false,
	name: 'age',
	type: 'integer',
};

const PERSON_TABLE: TableOptions = {
	name: 'person',
	columns: [
		PRIMARY_KEY_COLUMN,
		FIRST_NAME_COLUMN,
		LAST_NAME_COLUMN,
		AGE_COLUMN,
	],
};

export class createPerson1560857600685 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const table = new Table(PERSON_TABLE);
		return queryRunner.createTable(table);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		return queryRunner.dropTable(new Table(PERSON_TABLE));
	}
}
