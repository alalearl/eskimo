import mysqlConnection from '../libs/mysql';
import { read } from '../libs/sql-reader';
import path from 'path';

export const checkDatabase = async () => {
  try {
    const esUserCreateTable = read(
      path.resolve(process.env.ROOT, 'sql/es.sql')
    );
    for (const sql of esUserCreateTable) {
      await mysqlConnection.execute(sql);
    }
  } catch (error) {
    console.error(error);

    throw error;
  }
  try {
    const esUserCheck = read(
      path.resolve(process.env.ROOT, 'sql/check_es_user.sql')
    );

    console.log(esUserCheck);

    const queryCheckUser = await mysqlConnection.query(esUserCheck[0]);
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
