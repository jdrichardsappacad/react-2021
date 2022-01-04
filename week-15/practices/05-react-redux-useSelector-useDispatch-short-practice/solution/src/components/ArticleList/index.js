
//!!START
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
//!!END
import { Route, Switch } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
//!!START
import {loadArticles} from '../../store/articleReducer'
//!!END

const ArticleList = () => {

  //!!START
  const dispatch = useDispatch()
  const articles = useSelector(state=>state.articleState.entries)


  useEffect(() => {
    dispatch(loadArticles())
  }, [dispatch])

  //!!END
  return (
    <div>
      <h1>ArticleList</h1>
     

      {/** add hiding syntax for the {articles.map*/}
      <ol>
        {/*!!ADD  */}
        {/* <li>Gilligans Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li> */}
        {/*!!END_ADD */}
        {/*!!START_SILENT  */}
        {articles.map(({title, id}) => (
          <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
        ))}
        {/*!!END  */}
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
