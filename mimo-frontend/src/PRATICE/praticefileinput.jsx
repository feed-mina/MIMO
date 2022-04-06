import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";

// ...

const Home = ({ userObj }) => {
  // ...
  const [attachment, setAttachment] = useState();
  const [file, setFile] = useState("");

  const onFileChange = (event) => {
    const {
      target: { files, value },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    setFile(value);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => {
    setAttachment(null);
    setFile("");
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const postObj = {
      text: post,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("posts").add(postObj);
    setNweet("");
    setAttachment("");
    setFile("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="게시글을 써주세요."
          maxLength={120}
        />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          value={file}
        />
        <input type="submit" value="제출하기" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt="attachment" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <div>...</div>
    </div>
  );
};

export default Home;
