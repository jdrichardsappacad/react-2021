import { Route, Switch } from 'react-router-dom';
import SingleArticle from '../SingleArticle';

const ArticleList = () => {
  return (
    <div>
      <h1>ArticleList</h1>
      <ol>
        <li>Gilligans Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li>
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
