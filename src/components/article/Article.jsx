import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a
  href="https://www.larepublica.co/internet-economy/chatgpt-desafia-a-los-gigantes-del-internet-4146797"
  target="_blank"
  rel="noopener noreferrer"
>
  Leer toda la noticia
</a>
    </div>
  </div>
);

export default Article;
