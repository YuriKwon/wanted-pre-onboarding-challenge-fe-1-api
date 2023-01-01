import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Auth from './pages/Auth.tsx';
import Main from './pages/Main.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<Auth />}></Route>
          <Route path="main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
