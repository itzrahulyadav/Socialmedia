import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { signOut } from 'firebase/auth'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import { useState } from 'react';
import {auth} from './firebase-config';

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear()
          setIsAuth(false);
          window.location.pathname = '/login';
        })
    }

    return (
     <Router>
       <nav className = "link">
         <Link to = "/">Home</Link>
         { !isAuth ? <Link to = "/login">Login</Link>:
         (
           <>
            <Link to="/createpost">create</Link>
            <button className='logout-btn'onClick = {signUserOut}> Logout </button>
           </>
         )}
       </nav>
       
       <Routes>
         <Route path = "/" element = {<Home isAuth={isAuth}/>} />
         <Route path = "/createpost" element = {<CreatePost isAuth = {isAuth}/>} />
         <Route path = "/login" element = {<Login  setIsAuth = {setIsAuth}/>} />
       </Routes>
    </Router>
  );
}

export default App;
