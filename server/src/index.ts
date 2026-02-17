import express from 'express';
import cors from 'cors';
import { pool } from './config/database';

async function testDB() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('DB 연결 성공:', res.rows);
  } catch (err) {
    console.error('DB 연결 실패:', err);
  }
}

testDB();

//get
const app = express();
app.use(cors());
app.use(express.json());

app.get('/todos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'DB error' });
  }
});

//post
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.post('/todos', async (req, res) => {
  try {
    const { title } = req.body;
    const result = await pool.query(
      'INSERT INTO todos (title) VALUES ($1) RETURNING *',
      [title]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Insert error' });
  }
});

//patch (update)
app.patch('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const result = await pool.query(
      `UPDATE todos
       SET title = COALESCE($1, title),
           completed = COALESCE($2, completed)
       WHERE id = $3
       RETURNING *`,
      [title, completed, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Update error' });
  }
});

//delete
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM todos WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ Message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Delete Error' });
  }
});
