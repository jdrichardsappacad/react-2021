import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = () => {
  const { id } = useParams();

  //!!START
  const articles = useSelector((state) => state.article.entries);

  const singleArticle = articles.find((article) => article.id === id);
  //!!END

  //!!ADD
  const articles = useSelector((state) => state.article);

  const singleArticle = articles.find((article) => (article.id = id));
  //!!END_ADD

  return (
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
      <img src={singleArticle?.imageUrl} alt='home' />
      <p>{singleArticle?.body}</p>
    </div>
  );
};
export default SingleArticle;
