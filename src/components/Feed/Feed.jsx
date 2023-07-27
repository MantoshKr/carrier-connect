import React, { useEffect, useState } from 'react'
import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const unSub = onSnapshot(collection(db, "posts"), (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
      return () => {
        unSub();
      };
    }, []);
    console.log("posts",posts);


    
  return (
    <div>
        <CreatePost />
        <Post />
    </div>
  )
}

export default Feed