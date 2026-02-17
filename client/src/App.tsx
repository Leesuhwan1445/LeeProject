import { Routes, Route } from 'react-router-dom';
import TodoPages from './pages/TodoPages';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<TodoPages />} />
        <Route path="/todos" element={<TodoPages />} />
      </Routes>
    </div>
  );
};

export default App;
