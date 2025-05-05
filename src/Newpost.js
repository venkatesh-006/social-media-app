import React from 'react'
import './Newpost.css'

const Newpost = ({posttitle, setPosttitle, postbody, setPostbody, handlesubmit}) => {
  return (
    <div className='new-post-section'>
      <h1>New post</h1>
      <form onSubmit={handlesubmit}className='new-post'>
        <label>Title:</label>
        <input value={posttitle} onChange={(e) => setPosttitle(e.target.value)} id="posttitle" type="text" placeholder='Enter the title' required></input>
        <label>post:</label>
        <textarea value={postbody} onChange={(e) => setPostbody(e.target.value)} id="postbody" type="text" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Newpost