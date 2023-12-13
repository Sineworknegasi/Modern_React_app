import React from 'react'
import './article.css'

const Article = ({ ImgUrl, date, title }) => {
  return (
    <div className='gpt3_blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={ImgUrl} alt='blog image'></img>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p> {date} </p>
          <h3>{title} </h3>
        </div>
        <p> Read full Article </p>
      </div>
    </div>
  )
}

export default Article