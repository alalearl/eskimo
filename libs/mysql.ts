import mysql from 'mysql2/promise';

const mysqlConnection = {
  query: async (q: string): Promise<any> => {
    const connection = await connect();
    const [rows, fields] = await connection.query(q);
    await connection.end();
    return rows;
  },
  execute: async (q: string) => {
    const connection = await connect();
    const query = await connection.execute(q);
    await connection.end();

    return query;
  },
};

const connect = async () => {
  return await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
};

export default mysqlConnection;
