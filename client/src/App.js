import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle.tsx';
import './styles/font.css';
import './App.css';

import Auth from './pages/Auth.tsx';
import LoginPage from './pages/LoginPage.tsx';
import Main from './pages/Main.tsx';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="auth" element={<Auth />}></Route>
            <Route path="main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
