import React, { useEffect, useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useUser } from "../../context/UserContext";
import UserProfile from "../UserProfile/UserProfile";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { clickedUserId, setClickedUserId } = useUser();

  useEffect(() => {
    const unSub = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unSub();
    };
  }, []);

  const filteredPosts = clickedUserId
    ? posts.filter((p) => p.data.uid === clickedUserId)
    : posts;

  console.log("filteredPosts", filteredPosts);

  return (
    <div>
      {clickedUserId ? <UserProfile /> : <CreatePost />}
      {filteredPosts
        .sort((a, b) => b.data.timestamp - a.data.timestamp)
        .map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </div>
  );
};

export default Feed;
