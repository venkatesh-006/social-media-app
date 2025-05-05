import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

  return (
    <article className='post-article'>
      {post &&
        (<Link style={{ textDecoration: 'none' }} to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <p className='postdate'>{post.date}</p>
          <p className='postbody'>
            {post.body && post.body.length > 100
              ? post.body.slice(0, 100) + "..."
              : post.body || "No content"}
          </p>
        </Link>
        )}
    </article>
  )
}

export default Post