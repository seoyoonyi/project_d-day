import DayList from './DayList';
import DayHeader from './DayHeader';

const Home = ({ daylist }) => {
  return (
    <>
      <DayHeader />
      <DayList daylist={daylist} />
    </>
  );
};

export default Home;
