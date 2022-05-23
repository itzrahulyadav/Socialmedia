import React, { useEffect,useState} from 'react'
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const Home = ({isAuth}) => {
  const[postList,setPostList] = useState([]);

  const postsCollectionRef = collection(db,"posts");

  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) =>({...doc.data(),id:doc.id})))
    }
    getPosts();
  })
  const deletePost = async (id) => {
    const postDoc = doc(db,"posts",id);
    await deleteDoc(postDoc)
  }
  return (
    <div className = "homepage">
     {postList.map((post)=>{
        return (
        <div className = "post">
          <div className='header'>
            <h1>{post.title}</h1>
          </div>
          <div className='deletePost'>
            {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={() => deletePost(post.id)}>delete</button>
            )}
          </div>
          <h2>{post.postText}</h2>
          <h3 className='author'>@ {JSON.parse(JSON.stringify(post.author.name))}</h3>
        </div>
        );
     })}
    </div>
  )
}

export default Home