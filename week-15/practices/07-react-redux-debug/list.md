# BUGS

1. ArticleList Component - loadArticles not invoked
2. store root index.js articleReducer not implemented \*\*\*note in useSelector it
   is now state.article NOT state.articleReducer
3. ArticleReducer LOAD_ARTICLES

```js
case LOAD_ARTICLES:
    return { ...state, entries: [...state.articles] };
```

should be

```js
case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };


```

4. action creator

```js
export const addArticle = () => {
  return {
    type: ADD_ARTICLE
  };
};
```

SHOULD BE

```js
export const addArticle = () => {
  return {
    type: ADD_ARTICLE
  };
};
```

5. SingleArticle Component

```js
const articles = useSelector((state) => state.article);

const singleArticle = articles.find((article) => (article.id = id));
```

SHOULD BE

```js
const articles = useSelector((state) => state.article.entries);
const singleArticle = articles.find((article) => article.id === id);
```
