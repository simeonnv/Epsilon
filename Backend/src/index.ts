import { Elysia } from 'elysia';
import { Surreal } from "surrealdb.js";
import Login from './Auth/Login.ts';

const DB_URL = 'http://127.0.0.1:8080/rpc'; // Replace with your SurrealDB URL
const DB_NAMESPACE = 'test'; // Replace with your namespace
const DB_DATABASE = 'test'; // Replace with your database name

let db: Surreal = new Surreal();

await db.connect(DB_URL, {
	namespace: DB_NAMESPACE,
	database: DB_DATABASE,
  auth: {
		username: 'root',
		password: 'root',
	},
});

new Elysia()
    .use(Login)
    .onError(({ code }) => {
      if (code === 'NOT_FOUND')
          return 'Route not found 404'
    })
    .listen(8000)