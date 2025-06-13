import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Muchas cosas están pasando, <br /> te lo contamos aquí.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Junio 1, 2025" text="Chat GPT-4 y Open  AI es el futuro. Explóralo" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Enero 26, 2025" text="Las últimas tendencias de la Inteligencia Artificial" />
        <Article imgUrl={blog03} date="Febrero 12, 2025" text="Beneficios de digitalizar tu negocio." />
        <Article imgUrl={blog04} date="Marzo 23, 2025" text="Optimiza tu negocio con la yuda de la IA." />
        <Article imgUrl={blog05} date="Abril 16, 2025" text="La IA agéntica: la evolución de la que toca hablar en 2025" />
      </div>
    </div>
  </div>
);

export default Blog;
