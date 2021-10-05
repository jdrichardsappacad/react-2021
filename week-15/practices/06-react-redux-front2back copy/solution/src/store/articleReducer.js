import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
//!!START
const ADD_ARTICLE = 'article/addArticle';
//!!END

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

//!!START
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};
//!!END

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    //!!START
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    //!!END

    default:
      return state;
  }
};

export default articleReducer;
