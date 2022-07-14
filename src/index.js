import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DayEditor from './DayEditor';
import DayList from './DayList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/daylist" element={<DayList />} />
      <Route path="/dayeditor" element={<DayEditor />} />
    </Routes>
  </BrowserRouter>,
);
