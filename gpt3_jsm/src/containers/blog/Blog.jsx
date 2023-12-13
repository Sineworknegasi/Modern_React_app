import React from 'react'
import Article from '../../Components/article/Article'
import './blog.css'
import {blog1, blog2, blog3, blog4, blog5 } from './import'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Alot is happening, we are Blogging about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_GroupA'>
          <Article ImgUrl={blog1} date="Sep 26, 2021" title = "GPT-3 and open AI is the future. let us explore how it is?" />
        </div>
        <div className='gpt3__blog-container_GroupB'>
        <Article ImgUrl={blog2} date="Sep 26, 2021" title = "GPT-3 and open AI is the future. let us explore how it is?" />
        <Article ImgUrl={blog3} date="Sep 26, 2021" title = "GPT-3 and open AI is the future. let us explore how it is?" />
        <Article ImgUrl={blog4} date="Sep 26, 2021" title = "GPT-3 and open AI is the future. let us explore how it is?" />
        <Article ImgUrl={blog5} date="Sep 26, 2021" title = "GPT-3 and open AI is the future. let us explore how it is?" />
        </div> 
      </div>
    </div>
  )
}

export default Blog