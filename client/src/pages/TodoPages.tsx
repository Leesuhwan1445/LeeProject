import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const TodoPages = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');

  type Todo = {
    id: number;
    title: string;
    completed: boolean;
    create_at: string;
  };

  //get
  const fetchTodos = async () => {
    try {
      const res = await axios.get('/api/todos');
      setTodos(res.data);
    } catch (error) {
      console.error('Get Error:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //post
  const handleTodo = async () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    try {
      await axios.post('/api/todos', { title });
      setTitle('');
      fetchTodos();
    } catch (error) {
      console.error('POST Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-50/80 to-cyan-50 py-12 px-4">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-2xl font-bold text-sky-800">
          Todo List
        </h1>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="할 일을 입력하세요"
            className="flex-1 rounded-lg border border-sky-200 bg-white px-4 py-2.5 text-sky-900 placeholder-sky-300 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
            onKeyDown={(e) => e.key === 'Enter' && handleTodo()}
          />
          <button
            type="button"
            onClick={handleTodo}
            className="rounded-lg bg-sky-500 px-4 py-2.5 font-medium text-white shadow-md transition hover:bg-sky-600 active:bg-sky-700"
          >
            추가
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="rounded-lg border border-sky-100 bg-white px-4 py-3 text-sky-800 shadow-sm transition hover:border-sky-200 hover:shadow"
            >
              {todo.title}
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="mt-6 text-center text-sky-500">
            할 일이 없어요. 위에서 추가해 보세요.
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoPages;
