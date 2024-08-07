'use client';
import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
    article: IArticle,
    removeArticle: (article: IArticle) => void,
    showUpdateForm: (article: IArticle) => void
};

export const SingleArticle: React.FC<Props> = ({ article, removeArticle, showUpdateForm }) => {
const dispatch: Dispatch<any> = useDispatch();

const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)), [dispatch, removeArticle]
)

  return (
    <div>
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
      <button onClick={() => showUpdateForm(article)}>Update</button>
    </div>
  );
};
