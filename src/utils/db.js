import pg from "pg";
import { parse } from "pg-onnection-string";
let db;
if (!db) {
  const config = parse(process.env.DB_CONN);
  config.ssl = {
    rejectUnauthorized: false,
  };
  db = new pg.Pool(config);
}
