import {configureStore} from '@reduxjs/toolkit';
import count from '../slice/LikeSlice.jsx';
import Command from '../slice/Command.jsx';
import Follow from '../slice/FollowSlice.jsx';
import Post from '../slice/PostSlice.jsx';
const Store = configureStore({
	reducer:{
    like:count,
    command:Command,
    follow:Follow,
    post:Post
},
});

export default Store;