import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const UsersPage = () => {
  const [messageData, setMessageData] = useState([]);
  const userPostId = '3i1kBdAWggPvNrsKdqr2ihQuBpy1'; 

  useEffect(() => {
    const fetchMessageData = async () => {
      const userPostsCollection = 'usersPosts'; 

      
      const userPostRef = doc(db, userPostsCollection, userPostId);

     
      const userPostDoc = await getDoc(userPostRef);

      if (userPostDoc.exists()) {
        const userPostData = userPostDoc.data();

      
        if (userPostData.messages) {

          console.log('Message Data:');
          console.log(userPostData.messages);

          // Set all message data in state
          setMessageData(userPostData.messages);
        } else {
          console.log('No messages found for this userPost.');
        }
      } else {
        console.log(`User Post with ID ${userPostId} does not exist.`);
      }
    };

    fetchMessageData();
  }, [userPostId]);

  return (
    <div>
      <h1>User's Page</h1>
      {messageData.length > 0 ? (
        <div>
          {messageData.map((message, index) => (
            <div key={index}>
              <p>displayName: {message.displayName}</p>
              <p>id: {message.id}</p>
              <p>input: {message.input}</p>
              <p>photoURL: {message.photoURL}</p>
              <img src={message.img} alt="user" style={{maxWidth:"300px"}}/>
              {/* <p>timestamp: {message.timestamp}</p> */}
              <p>uid: {message.uid}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UsersPage;