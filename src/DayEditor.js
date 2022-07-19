import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DayEditor = ({ onCreate }) => {
  const titleInput = useRef();
  const [state, setState] = useState({
    title: '',
    date: getStringDate(new Date()),
  });
  const navigate = useNavigate();
  const handleChangedata = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.title.length < 0) {
      titleInput.current.focus();
      return;
    }
    onCreate(state.title, state.date);
    alert('저장성공');
    setState({ title: '', date: getStringDate(new Date()) });

    navigate('/', { replace: true });
  };

  return (
    <>
      <header>
        <div>
          <Link to="/">
            <button>뒤로 가기</button>
          </Link>
        </div>
        <div>
          <button onClick={handleSubmit}>저장</button>
        </div>
      </header>
      <main>
        <input
          ref={titleInput}
          name="title"
          value={state.title}
          onChange={handleChangedata}
        />
        <div className="dateBox">
          <input
            type="date"
            name="date"
            value={state.date}
            onChange={handleChangedata}
          />
        </div>
      </main>
    </>
  );
};

export default DayEditor;
