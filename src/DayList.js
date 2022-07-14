import React from 'react';
import { Link } from 'react-router-dom';

const DayList = () => {
  return (
    <header>
      <h1 className="logo">로고</h1>
      <div className="addDay">
        <Link to="dayeditor">
          <button>+</button>
        </Link>
      </div>
    </header>
  );
};

export default DayList;
