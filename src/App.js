import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Archive } from './pages/Archive';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/archive'} element={<Archive/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
