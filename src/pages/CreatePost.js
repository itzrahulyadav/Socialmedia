import { async } from '@firebase/util';
import {addDoc, collection} from 'firebase/firestore'
import React,{useEffect, useState} from 'react'
import {db,auth} from '../firebase-config';
import {useNavigate} from 'react-router-dom';

const CreatePost = ({isAuth}) => {
  const [title,setTitle] = useState("");
  const [postText,setPostText] = useState("");
  
  const postsCollectionRef = collection(db,"posts");
  const navigate = useNavigate()
   const createPost = async() => {
      await addDoc(postsCollectionRef,{
      title,
      postText,
      author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
      navigate('/');
   }

   useEffect(()=>{
     if(!isAuth)
     {
        navigate("/login");
     }
   },[])
  return (
    <div className = "createPost">
      <div className='container'>
         <h1>Create Post</h1>
         <div className = "inputGp">
           <label>Title:</label>
           <input placeholder = "title..." onChange = {(e) => setTitle(e.target.value)}/>
         </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="post..." onChange = {(e)=>setPostText(e.target.value)}/>
        </div>
        <button onClick={createPost}>submit</button>
      </div>
    </div>
  )
}

export default CreatePost