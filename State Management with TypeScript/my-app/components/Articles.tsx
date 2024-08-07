'use client';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addArticle, removeArticle } from '../store/actionCreators';
import { useCallback, useState } from 'react';
import { AddArticle } from './AddArticle';
import { SingleArticle } from './SingleArticle';
import { UpdateArticle } from './UpdateArticle';

const Articles: React.FC = () => {
  const [updateForm, setUpdateForm] = useState();
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  const updateArticle = (article: IArticle) => {
    dispatch({ 
        type: "UPDATE_ARTICLE",
        article
     })
  };

  const showUpdateForm = (article: IArticle) => {
    setUpdateForm(article);
  };

  return (
    <main>
      <h1>My articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <SingleArticle
          key={article.id}
          article={article}
          removeArticle={removeArticle}
          showUpdateForm={showUpdateForm}
        />
      ))}
      {updateForm && <UpdateArticle saveArticle={updateArticle} currentArticle={updateForm}/>}
    </main>
  );
};

export default Articles;
