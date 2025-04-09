import React, { useState } from 'react';
import './Post.css'
import {setPost} from './slice/PostSlice.jsx';
import {useDispatch,useSelector} from 'react-redux';

const Post = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const dispatch =useDispatch();
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
     const imageUrl = image ? URL.createObjectURL(image) : null;

    console.log('Post Content:', content);
    console.log('Image:', image);

    dispatch(setPost({content,image:imageUrl}))
    setContent('');
    setImage(null);
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
