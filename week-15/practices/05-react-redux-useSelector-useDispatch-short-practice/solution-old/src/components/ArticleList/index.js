//!!START
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//!!END
import { Route, Switch } from 'react-router-dom';
//!!START
import ArticleDetail from '../ArticleDetail';
//!!END
import SingleArticle from '../SingleArticle';
//!!START
import { loadArticles } from '../../store/articleReducer';
//!!END

const ArticleList = () => {
  //!!START
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);
  //!!END

  //!!START
  useEffect(() => {
    dispatch(loadArticles());
  });
  //!!END

  return (
    <div>
      <h1>ArticleList</h1>
      <ol>
        {/* !!START */}
        {articles.map(({ title, id }) => (
          <ArticleDetail key={id} id={id} title={title} />
        ))}
        {/*!!END */}
        {/*!!ADD */}
        <li>Gilligans Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li>
        {/*!!END_ADD */}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};
export default ArticleList;
