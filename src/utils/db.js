import "server-only";
import pg from "pg";
import { parse } from "pg-connection-string";
let db;
if (!db) {
  const config = parse(process.env.DB_CONN);
  config.ssl = {
    rejectUnauthorized: false,
  };
  db = new pg.Pool(config);
}
