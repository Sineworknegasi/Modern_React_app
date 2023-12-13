import React from 'react'
import Article from '../../Components/article/Article'
import './blog.css'
import {blog1, blog2, blog3, blog4, blog5 } from './import'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog heading'>
        <h1 className='gradient__text'>Alot is happening, we are Blogging about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__GroupA'>
          <Article ImgUrl={blog1}/>
        </div>
        <div className='gpt3__blog-container__GroupB'>
        <Article ImgUrl={blog2}/>
        <Article ImgUrl={blog3}/>
        <Article ImgUrl={blog4}/>
        <Article ImgUrl={blog5}/>
        </div> 
      </div>
    </div>
  )
}

export default Blog