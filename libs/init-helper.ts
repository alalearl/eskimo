import mysqlConnection from '../libs/mysql';
import { read } from '../libs/sql-reader';
import path from 'path';

export const checkDatabase = async () => {
  try {
    const esUserCreateTable = read(
      path.resolve(process.env.ROOT, 'sql/es_users.sql')
    );
    await mysqlConnection.execute(esUserCreateTable);
  } catch (error) {
    console.error(error);

    throw error;
  }
  try {
    const esUserCheck = read(
      path.resolve(process.env.ROOT, 'sql/check_es_user.sql')
    );
    const queryCheckUser = await mysqlConnection.query(esUserCheck);
    if (queryCheckUser[0].count <= 0) {
      return { initialize: true };
    } else {
      return { initialize: false };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
