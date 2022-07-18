import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DayEditor = ({ onCreate }) => {
  const titleInput = useRef();
  const [state, setState] = useState({
    title: '',
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
    onCreate(state.title);
    alert('저장성공');
    setState({ title: '' });

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
      </main>
    </>
  );
};

export default DayEditor;
