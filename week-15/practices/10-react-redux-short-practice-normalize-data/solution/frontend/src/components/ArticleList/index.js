import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { fetchArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) =>
    Object.values(state.articleState.entries)
  );
  console.log('art', articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/article/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle articles={articles} />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
