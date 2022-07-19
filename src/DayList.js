import React from 'react';
import DayItem from './DayItem';

function DayList({ daylist }) {
  return (
    <div>
      {daylist.map((it, idx) => (
        <DayItem key={idx} {...it} />
      ))}
    </div>
  );
}

export default DayList;
