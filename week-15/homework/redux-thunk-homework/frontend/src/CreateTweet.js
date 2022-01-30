//!!START_SILENT
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTweet } from './store/tweet';
//!!END

const CreateTweet = () => {
  {
    /*!!START_SILENT */
  }
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      message: text
    };
    dispatch(createTweet(message));
    setText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Create Tweet</button>
      </form>
    </>
  );
  {
    /*!!END */
  }
};
export default CreateTweet;
