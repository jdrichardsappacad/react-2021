import { useState } from 'react';
//!!START
import { useDispatch } from 'react-redux';
//!!END
import { nanoid } from 'nanoid';

//!!START
import { addArticle } from '../../store/articleReducer';
//!!END
import './ArticleInput.css';

const ArticleInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  //!!START
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: nanoid(),
      title,
      body,
      imageUrl
    };

    dispatch(addArticle(newArticle));
  };
  //!!END

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
