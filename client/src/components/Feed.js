import React, {useState, useEffect} from 'react';
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post.js";

import app from "./firebase";

export default function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    app.firestore().collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ));
  },[])


    return (
        <div className="feed">
        <MessageSender />

        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          
          />
        )
  )}

            {/* <Post profilePic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwearetenzing.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fblank-head-profile-pic-for-a-man.jpg&imgrefurl=https%3A%2F%2Fwearetenzing.com%2Fdt_team%2Ftakafumi-fukuroi%2Fblank-head-profile-pic-for-a-man%2F&tbnid=INAeyuyIb_28bM&vet=12ahUKEwiR7PyV9fbrAhXH0FMKHRoTA1cQMygMegUIARDkAQ..i&docid=8qzL6m3tcE4l5M&w=431&h=408&q=profilepic&ved=2ahUKEwiR7PyV9fbrAhXH0FMKHRoTA1cQMygMegUIARDkAQ"
                message="Wow this works"
                timestamp="This is a timestamp"
                image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
              <Post profilePic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwearetenzing.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fblank-head-profile-pic-for-a-man.jpg&imgrefurl=https%3A%2F%2Fwearetenzing.com%2Fdt_team%2Ftakafumi-fukuroi%2Fblank-head-profile-pic-for-a-man%2F&tbnid=INAeyuyIb_28bM&vet=12ahUKEwiR7PyV9fbrAhXH0FMKHRoTA1cQMygMegUIARDkAQ..i&docid=8qzL6m3tcE4l5M&w=431&h=408&q=profilepic&ved=2ahUKEwiR7PyV9fbrAhXH0FMKHRoTA1cQMygMegUIARDkAQ"
                message="Wow this works"
                timestamp="This is a timestamp"
                image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
              <Post profilePic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwearetenzing.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fblank-head-profile-pic-for-a-man.jpg&imgrefurl=https%3A%2F%2Fwearetenzing.com%2Fdt_team%2Ftakafumi-fukuroi%2Fblank-head-profile-pic-for-a-man%2F&tbnid=INAeyuyIb_28bM&vet=12ahUKEwiR7PyV9fbrAhXH0FMKHRoTA1cQMygMegUIARDkAQ..i&docid=8qzL6m3tcE4l5M&w=431&h=408&q=profilepic&ved=2ahUKEwiR7PyV9fbrAhXH0FMKHRoTA1cQMygMegUIARDkAQ"
                message="Wow this works"
                timestamp="This is a timestamp"
                image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/> */}
        </div>
    )
}
