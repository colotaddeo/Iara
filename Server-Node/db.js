import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false,
  }
});

pool.getConnection()
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Db not connected due to error: " + err);
  });
