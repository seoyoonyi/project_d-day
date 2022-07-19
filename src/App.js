import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DayEditor from './DayEditor';
import Home from './Home';

const App = () => {
  const [data, setData] = useState([]);

  const onCreate = (title, date) => {
    const newItem = {
      title,
      date,
    };
    setData((data) => [newItem, ...data]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home daylist={data} />} />
          <Route
            path="/dayeditor"
            element={<DayEditor onCreate={onCreate} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
