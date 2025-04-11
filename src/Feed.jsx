import { useState,useEffect } from 'react';
import './Feed.css';
import ui1 from './assets/ui1.jpg'
import ui2 from './assets/ui2.jpg'
import ui4 from './assets/ui4.jpg'
import ui5 from './assets/ui5.jpg'
import {setLike} from './slice/LikeSlice.jsx';
import {setCommand} from './slice/Command.jsx';
import {setPost} from './slice/PostSlice.jsx';
import {setIncrease,setDescrease} from './slice/PostCount.jsx';
import{useDispatch,useSelector} from 'react-redux';
const Feed = () => {

  const [localStore,setLocalStore] = useState([]);
  const [comment,setComment]=useState(null)
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.like); 

  const commandSelector = useSelector((state) => state.command.Command);
console.log(commandSelector);

  const [commandInput, setCommandInput] = useState(""); 

   const postSelector = useSelector((state)=> state.post);

   //postcount

   const countDispatch = useDispatch();

  // const postCount = useSelector((state)=> state.postcount.count);


   useEffect(() => {
    if(postSelector.length>0){
       localStorage.setItem('localStore',JSON.stringify(postSelector))
       countDispatch(setIncrease());
    }
   }, [postSelector]);

   useEffect(()=>{
     const postData = localStorage.getItem('localStore')

     if(postData){
         setLocalStore(JSON.parse(postData))
     }
   },[])


  const handleCommand =()=>{
     dispatch(setCommand(commandInput))
    setComment(null);
    setCommandInput('')
  
  }

  const handleDelete = (postIndex) => {
  const updatedStore = localStore.filter((_, index) => index !== postIndex);
  setLocalStore(updatedStore);
  countDispatch(setDescrease())
  localStorage.setItem('localStore', JSON.stringify(updatedStore));
};




 const userData = [
  {
    name: 'muthukumar',
    content: 'Just finished building my first React project! 🚀',
    Timestamp: '4hrs',
  },
  {
    name: 'jayakumar',
    content: 'Learning Redux today. It’s a bit tricky but powerful! 💪',
    Timestamp: '6hrs',
  },
  {
    name: 'priya',
    content: 'Designed a responsive landing page using CSS Grid and Flexbox!',
    Timestamp: '8hrs',
  },
  {
    name: 'arun',
    content: 'Built a weather app using OpenWeatherMap API 🌦️',
    Timestamp: '10hrs',
  },
  {
    name: 'meena',
    content: 'Started exploring Node.js and Express. Backend is fun! 🔧',
    Timestamp: '12hrs',
  },
  {
    name: 'vishnu',
    content: 'Fixed a tough bug today. Feeling like a real dev! 🐞✅',
    Timestamp: '16hrs',
  },
  {
    name: 'nandhini',
    content: 'Published my first blog post on JavaScript closures ✍️',
    Timestamp: '20hrs',
  },
  {
    name: 'dinesh',
    content: 'Created a portfolio website using React and hosted it on Netlify 🚀',
    Timestamp: '1 day ago',
  },
];

const imagePost = [
  {
    name: 'Priyan',
    content: "Here's my latest UI design mockup! 🎨",
    img: ui1,
    timestamp: "30 mins ago",
  },
  {
    name: 'Meena',
    content: "Checkout my dashboard layout for an analytics app 📊",
    img: ui2,
    timestamp: '1 day ago',
  },
  {
    name: 'Vikram',
    content: "Built this clean login page UI with React and Tailwind 🔐",
    img: ui4,
    timestamp: '3 days ago',
  },
  {
    name: 'Divya',
    content: "Sharing my eCommerce product page UI design 💄",
    img: ui5,
    timestamp: '5 days ago',
  }
];

const posts = [
  {
    username: "madhan_uiux",
    content: "Looking for a UI/UX intern for a freelance project. DM me!",
    timestamp: "3 hours ago"
  },
  {
    username: "anu_dev",
    content: "Just wrapped up a dashboard in React with Tailwind CSS. Feedback welcome!",
    timestamp: "1 hour ago"
  },
  {
    username: "ravi_codes",
    content: "Deployed my first full-stack project on Vercel. Node.js + React 💻🚀",
    timestamp: "5 hours ago"
  },
  {
    username: "designbykavi",
    content: "Exploring new color palettes for mobile UI. Any suggestions?",
    timestamp: "2 hours ago"
  },
  {
    username: "dev_ashwin",
    content: "Built a Chrome extension to auto-apply for jobs on LinkedIn 😅",
    timestamp: "30 minutes ago"
  }
];

const jobpost = [
  {
    username: "madhan_uiux",
    content: "Looking for a UI/UX intern for a freelance project. DM me!",
    timestamp: "3 hours ago"
  },
  {
    username: "anu_dev",
    content: "Just wrapped up a dashboard in React with Tailwind CSS. Feedback welcome!",
    timestamp: "1 hour ago"
  },
  {
    username: "ravi_codes",
    content: "Deployed my first full-stack project on Vercel. Node.js + React 💻🚀",
    timestamp: "5 hours ago"
  },
  {
    username: "designbykavi",
    content: "Exploring new color palettes for mobile UI. Any suggestions?",
    timestamp: "2 hours ago"
  },
  {
    username: "dev_ashwin",
    content: "Built a Chrome extension to auto-apply for jobs on LinkedIn 😅",
    timestamp: "30 minutes ago"
  }
];


  return (
    <div className='container'>

      {userData.map((user, index) => (

        <div className='project' key={index}>

          <span>UserName</span>
          <h4>{user.name}</h4>

          <span>Content</span>
          <p>{user.content}</p>

          <span>Timestamp</span>
          <h6>{user.Timestamp}</h6>

          <div className='reaction'>
            <span className='text' onClick={()=>{
              dispatch(setLike(index));
            }}>  {selector[index] || 0} Like 👍</span>
            <span className='text' onClick={() => 

            setComment(index)}>Comment 💬</span>
          </div>

         {comment === index && (
        <div className='comment-box'>
          <input className='comment' placeholder='Post the comment!' value={commandInput} onChange={(e)=> setCommandInput(e.target.value)} />
          <button className='save' onClick={handleCommand}>Save</button>
        </div>
      )}

        </div>
      ))}
       
        <div className='image'>
      {imagePost.map((image,index)=>(
          <div className='image-content' key={index}>
          <span>UserName</span><h4>{image.name}</h4>
          <span>Content</span><p>{image.content}</p>
          <span>Timestamp</span><h6>{image.Timestamp}</h6>
          <img src={image.img} /> 

           <div className='reaction'>
            <span className='text' onClick={()=>{
              dispatch(setLike(index));
            }}>  {selector[index] || 0} Like 👍</span>
            <span className='text' onClick={() => 

            setComment(index)}>Comment 💬</span>
          </div>

         {comment === index && (
        <div className='comment-box'>
          <input className='comment' placeholder='Post the comment!' value={commandInput} onChange={(e)=> setCommandInput(e.target.value)} />
          <button className='save' onClick={handleCommand}>Save</button>
        </div>
      )}
     </div>

      ))}
      </div>

      <div className='image'>
        {posts.map((post,index)=>(
          <div className='project' key={index}>
          <span>UserName</span><h4>{post.username}</h4>
          <span>Content</span><p>{post.content}</p>
          <span>Timestamp</span><h6>{post.timestamp}</h6>
           <div className='reaction'>
            <span className='text' onClick={()=>{
              dispatch(setLike(index));
            }}>  {selector[index] || 0} Like 👍</span>
            <span className='text' onClick={() => 

            setComment(index)}>Comment 💬</span>
          </div>

          {comment === index && (
        <div className='comment-box'>
          <input className='comment' placeholder='Post the comment!' value={commandInput} onChange={(e)=> setCommandInput(e.target.value)} />
          <button className='save' onClick={handleCommand}>Save</button>
        </div>
      )}

         
          </div>
          ))}
      </div>

      <div className='image'>
           {jobpost.map((job,index)=> (
           <div className='project' key={index}>

           <span>UserName</span>
          <h4>{job.username}</h4>

          <span>Content</span>
          <p>{job.content}</p>

          <span>Timestamp</span>
          <h6>{job.timestamp}</h6>

          <div className='reaction'>
            <span className='text' onClick={()=>{
              dispatch(setLike(index));
            }}>  {selector[index] || 0} Like 👍</span>
            <span className='text' onClick={() => 

            setComment(index)}>Comment 💬</span>
          </div>

         {comment === index && (
        <div className='comment-box'>
          <input className='comment' placeholder='Post the comment!' value={commandInput} onChange={(e)=> setCommandInput(e.target.value)} />
          <button className='save' onClick={handleCommand}>Save</button>
        </div>
      )}
             
           </div>

          ))}
             

           <div className='image'> 
           
           {localStore.map((post,index)=>(

            <div className='image-content' key={index}>
                
              <span>Content</span>
              <p>{post.content}</p>
              <span>Image</span>
              <img  src={post.image}/>
 
              <span>Timestamp</span>
              <h6>{post.timestamp}</h6>
              
              <div className='reaction'>
              <span className='text' onClick={()=>{
                dispatch(setLike(index));
              }}>  {selector[index] || 0} Like 👍</span>
              <span className='text' onClick={() => 

              setComment(index)}>Comment 💬</span>

              <button onClick={()=> handleDelete(index)}>Delete</button>

            </div>

           {comment === index && (
          <div className='comment-box'>
            <input className='comment' placeholder='Post the comment!' value={commandInput} onChange={(e)=> setCommandInput(e.target.value)} />
            <button className='save' onClick={handleCommand}>Save</button>
                      </div>
        )}

            </div>

            ))}
            </div>
      </div>

    </div>
  );
};

export default Feed;
