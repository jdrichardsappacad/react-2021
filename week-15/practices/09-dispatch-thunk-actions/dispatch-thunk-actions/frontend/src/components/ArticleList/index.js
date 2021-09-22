import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SingleArticle from "../SingleArticle";
import ArticleDetail from "../ArticleDetail";
//!!START SILENT
import { fetchArticles } from "../../store/articleReducer";
//!!END
//!!ADD
// import { getArticles } from '../../store/articleReducer';
//!!END_ADD

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articleState.entries);

  useEffect(() => {
    //!!START SILENT
    dispatch(fetchArticles());
    //!!END
    //!!ADD
    // dispatch(getArticles());
    //!!END_ADD
  }, [dispatch]);

  return (
    <div>
      <h1>ArticleList</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <ArticleDetail key={id} id={id} title={title} />
        ))}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle articles={articles} />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
