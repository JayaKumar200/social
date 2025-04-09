// import {useState} from 'react'
// import './Navbar.css'

// const Navbar = ({ setActiveSession, activeSession }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className='navbar'>

//         <div className="menu-icon" onClick={toggleMenu}>
//               &#x22EE;
//             </div>
//       <ul>
//         <li
//           className={activeSession === 'home' ? 'active' : ''}
//           onClick={() => setActiveSession('home')}
//         >
//           Home
//         </li>
//         <li
//           className={activeSession === 'feed' ? 'active' : ''}
//           onClick={() => setActiveSession('feed')}
//         >
//           Feed
//         </li>
//         <li
//           className={activeSession === 'post' ? 'active' : ''}
//           onClick={() => setActiveSession('post')}
//         >
//           CreatePost
//         </li>
//         <li
//           className={activeSession === 'profile' ? 'active' : ''}
//           onClick={() => setActiveSession('profile')}
//         >
//           Profile
//         </li>
//       </ul>
//     </div>
//   )
// }

//  export default Navbar




import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveSession, activeSession }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='navbar'>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✕' : '⋮'}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li onClick={() => { setActiveSession('home'); setIsOpen(false); }} className={activeSession === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => { setActiveSession('feed'); setIsOpen(false); }} className={activeSession === 'feed' ? 'active' : ''}>Feed</li>
        <li onClick={() => { setActiveSession('post'); setIsOpen(false); }} className={activeSession === 'post' ? 'active' : ''}>CreatePost</li>
        <li onClick={() => { setActiveSession('profile'); setIsOpen(false); }} className={activeSession === 'profile' ? 'active' : ''}>Profile</li>
      </ul>
    </div>
  );
};

export default Navbar;
