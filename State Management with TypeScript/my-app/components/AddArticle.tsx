import React from "react";

type Props = {
  saveArticle: (article: IArticle) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | null>();

  const addArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
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
      <button onClick={addArticle} value={article?.title}>
        Add Article
      </button>
    </form>
  );
};

