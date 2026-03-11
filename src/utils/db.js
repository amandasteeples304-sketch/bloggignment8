import pg from "pg";
import { parse } from "pg-connection-string";
const connectionString = process.env.DB_CONN;
if (!connectionString) {
  throw new Error("DB_CONN environment variable is missing!");
}
const connectionConfig = parse(connectionString);
connectionConfig.ssl = {
  rejectUnauthorized: false,
};
export const db = new pg.Pool(connectionConfig);
