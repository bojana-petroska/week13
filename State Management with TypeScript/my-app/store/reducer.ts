const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: 'Post 1',
      body: 'Description of Post 1',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Description of Post 2',
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const newArticle: IArticle = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body,
      };

      return { ...state, articles: state.articles.concat(newArticle) };
    case 'REMOVE_ARTICLE':
      const updatedArticles = state.articles.filter(
        (article) => article.id !== action.article.id
      );

      return { ...state, articles: updatedArticles };
    case 'UPDATE_ARTICLE':
      const updatedArticle = state.articles.map((article) => {
        if (article.id === action.article.id) {
          return action.article
        }
        return article;
      });

      return { ...state, articles: updatedArticle }
    default:
      return state;
  }
};

export default reducer;
