import React from 'react'
import './article.css'

const Article = ({ ImgUrl }) => {
  return (
    <div className='gpt3_blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={ImgUrl} alt='blog image'></img>
      </div>
    </div>
  )
}

export default Article