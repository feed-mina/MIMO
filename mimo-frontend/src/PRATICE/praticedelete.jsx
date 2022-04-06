// components/Post.js
import { dbService } from "fbase";
import React, { useState } from "react";
const Post = ({ postObj, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    console.log(ok);
    if (ok) {
      await dbService.doc(`posts/${postObj.id}`).delete();
    }
  };
  return (
    <div>
      <h4>{postObj.text}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>삭제</button>
        </>
      )}
    </div>
  );
};
export default Post;
