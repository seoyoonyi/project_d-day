import React from 'react';
import DayItem from './DayItem';

function DayList({ daylist }) {
  return (
    <div>
      {daylist.map((it) => (
        <DayItem {...it} />
      ))}
    </div>
  );
}

export default DayList;
