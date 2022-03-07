const GET_ARTICLES = 'articles/getArticles';
const ADD_ARTICLE = 'articles/addArticle';

export const addArticle = (newArticle) => ({
  type: ADD_ARTICLE,
  newArticle,
});

export const getArticles = (articles) => {
  return { type: GET_ARTICLES, articles };
};

export const fetchArticles = () => async (dispatch) => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(getArticles(articles));
};

export const writeArticle = (payload) => async (dispatch) => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const article = await response.json();
    dispatch(addArticle(article));
    return article;
  }
};


//!!START_SILENT
const initialState = { entries: {}, isLoading: true };
//!!END
//!!ADD
// const initialState = { entries: [], isLoading: true };
//!!END_ADD

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
    //!!START_SILENT
    {
        const newArticles = {...state}
        action.articles.forEach(article=> newArticles.entries[article.id] = article)
        return newArticles
    }
    //!!END
      //!!ADD
      //return { ...state, entries: [...action.articles] };
      //!!END_ADD
    case ADD_ARTICLE:
        //!!START_SILENT
        return {...state, entries:{...state.entries, [action.newArticle.id]:action.newArticle}}
        //!!END
        //!!ADD 
        // return { ...state, entries: [...state.entries, action.newArticle] };
        //!!END_ADD
    default:
      return state;
  }
};

export default articleReducer;
