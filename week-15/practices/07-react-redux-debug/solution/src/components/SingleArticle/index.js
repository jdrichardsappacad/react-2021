import './SingleArticle.css';

const SingleArticle = ({ title }) => {
  return (
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
      <img src={singleArticle?.imageUrl} alt='home' />
      <p>{singleArticle?.body}</p>
    </div>
  );
};
export default SingleArticle;
