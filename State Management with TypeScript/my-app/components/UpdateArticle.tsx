import React, { useEffect } from "react";

type Props = {
  saveArticle: (article: IArticle) => void;
  currentArticle: IArticle;
};

export const UpdateArticle: React.FC<Props> = ({ saveArticle, currentArticle }) => {
  const [article, setArticle] = React.useState<IArticle | null>(currentArticle);

  useEffect(() => {
    setArticle(currentArticle);
  }, [currentArticle])

  const addArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (article) {
      saveArticle(article);
    }
  };

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={addArticle}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
        value={article?.title}></input>
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
        value={article?.body}></input>
      <button type="submit">
        Update Article
      </button>
    </form>
  );
};

