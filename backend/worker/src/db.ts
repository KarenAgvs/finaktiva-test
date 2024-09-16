import mysql from "mysql2/promise";

let connection: mysql.Pool | undefined;

export async function createMySQLConnection(): Promise<mysql.Pool> {
  if (!connection) {
    connection = mysql.createPool({ uri: process.env.DATABASE_URL });
  }
  return connection;
}
