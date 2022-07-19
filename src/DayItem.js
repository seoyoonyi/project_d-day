import React from 'react';

const DayItem = ({ title, date }) => {
  return (
    <>
      <div>제목 : {title}</div>
      <div>날짜 : {date}</div>
    </>
  );
};

export default DayItem;
