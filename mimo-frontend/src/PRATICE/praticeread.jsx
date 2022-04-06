import React from "react";
const Post = ({ postObj }) => {
  return (
    <div>
      <h4>{postObj.text}</h4>
    </div>
  );
};
export default Post;
