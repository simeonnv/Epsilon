import { Elysia } from 'elysia';
import { Surreal } from "surrealdb.js";

const DB_URL = 'http://127.0.0.1:8080/rpc'; // Replace with your SurrealDB URL
const DB_NAMESPACE = 'test'; // Replace with your namespace
const DB_DATABASE = 'test'; // Replace with your database name

let db: Surreal | undefined = new Surreal();
const app = new Elysia();
db.connect(DB_URL)

await db.connect(DB_URL, {
	namespace: DB_NAMESPACE,
	database: DB_DATABASE,
  auth: {
		username: 'root',
		password: 'root',
	},
});

// Use the variable in a subsequent query
console.log(await db.query('CREATE person SET name = $name'));

// Use the variable in a subsequent query
console.log(await db.query('SELECT * from author'));



app.get('/:id', async ({ params: { id } }) => {
    
    const data1 = await db.query('CREATE person SET name = $name')
    const data2 = await db.query('SELECT * from author')
    const data = {
      data1,
      data2
    }
    return(data)
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});