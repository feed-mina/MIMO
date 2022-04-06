import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Post from "./praticeread";

const Home = ({ userObj }) => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbService.collection("posts").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    });
  }, []);

  //   const onSubmit = async (event) => {
  //     event.preventDefault();
  //     await dbService
  //       .collection("posts")
  //       .add({ text: post, createdAt: Date.now(), creatorId: userObj.uid });
  //     setPost("");
  //   };
  //   const onChange = (event) => {
  //     const {
  //       target: { value },
  //     } = event;
  //     setPost(value);
  //   };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={post}
          onChange={onChange}
          type="text"
          placeholder="게시글을 입력하세요"
          maxLength={120}
        />
        <input type="submit" value="Post!!" />
      </form>
    </div>
  );
};
export default Home;
