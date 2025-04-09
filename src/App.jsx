import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Feed from './Feed.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import Post from './Post.jsx'

const App = () => {
  const [activeSession, setActiveSession] = useState('home')

  return (
    <>
      <Navbar activeSession={activeSession} setActiveSession={setActiveSession} />
      <div className="main-content">
        {activeSession === 'home' && <Home setActiveSession={setActiveSession} />}
        {activeSession === 'feed' && <Feed />}
        {activeSession === 'profile' && <Profile />}
        {activeSession === 'post' && <Post />}
      </div>
    </>
  )
}

export default App
