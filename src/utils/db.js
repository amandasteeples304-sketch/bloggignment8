import pg from "pg";

export function connect() {
  return new pg.Pool({
    connectionString: process.env.DB_CONN,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

export const db = connect();
