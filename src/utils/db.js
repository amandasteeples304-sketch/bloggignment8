import pg from "pg";
import { parse } from "pg-connection-string";
const connectionConfig = parse(process.env.DB_CONN);
connectionConfig.ssl = {
  rejectUnauthorised: false,
};
const db = new pg.Pool(connectionConfig);
export { db };
