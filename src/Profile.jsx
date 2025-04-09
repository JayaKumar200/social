import React from 'react'
import './Profile.css'
import {setFollow,setDisconnect} from './slice/FollowSlice.jsx';
import {useDispatch,useSelector} from 'react-redux';

const Profile = () => {

     const dispatch = useDispatch()
     const selector = useSelector((state)=> state.follow.follower)
	const profile = {
		  name: "Jayakumar",
		  username: "@jaya_dev",
		  bio: "Front-End Developer | React.js | Building web experiences 🚀",
		  location: "Madurai, India",
		  website: "https://jayafactory-yl1h.vercel.app",
		  email:'vjayakumar850@gmail.com',
		  phone:7358906752,
		  skills:'Html,Css,JavaScript,React,Node.js,Express.js ,RestAPI and Mysql',
		  joined: "Joined January 2022",
		  following: 120,
		  posts: [
		    {
		      content: "Started building my own Chrome extension using React! 🔥",
		      timestamp: "2 hours ago"
		    },
		    {
		      content: "Published my latest blog on Redux Toolkit. Feedback welcome!",
		      timestamp: "1 day ago"
		    },
		    {
		      content: "Designed a new UI for my weather app ☁️ Check it out!",
		      timestamp: "3 days ago"
		    }
		  ]
		}

	return (
		<div className="profile-container">
		  <h2 >{profile.name}</h2>
		  <p className="username">{profile.username}</p>
		  <p className="bio">{profile.bio}</p>
		  <p>📍 {profile.location}</p>
		  <p>🔗 <a href={profile.website} target="_blank">{profile.website}</a></p>
		  <p>🗓️ {profile.joined}</p>
		  <p>📧 {profile.email}</p>
		  <p>📞 {profile.phone}</p>
		  <p>🛠️ {profile.skills}</p>
		  <p>👥 {selector} Followers • {profile.following} Following</p>
		  <button onClick={()=> dispatch(setFollow())}>Connect!</button> 
		  <button onClick={()=> dispatch(setDisconnect())}>DisConnect</button>
		  <hr />
		  <h3>Recent Posts</h3>
		  {profile.posts.map((post, index) => (
		    <div key={index} className="post">
		      <p>{post.content}</p>
		      <small>{post.timestamp}</small>
		    </div>
		  ))}
		</div>

	)
}

export default Profile