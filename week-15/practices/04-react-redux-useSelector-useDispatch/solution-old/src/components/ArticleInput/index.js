import { useState } from 'react';
import { nanoid } from 'nanoid';
import './ArticleInput.css';

// When only one component cares about the state, use local state, not Redux

//GOALS:
// Add an article to the redux store
// import useDispatch
// import action creator from store to create an article
// dispatch the new article to the Redux store

const ArticleInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    console.log('handleSubmit clicked');
  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setBody('');
  };

  return (
    <div className='inputBox'>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />

        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your entry'
          rows='10'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default ArticleInput;
