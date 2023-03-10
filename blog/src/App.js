/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [postTitle, changePostTitle] = useState([
    "How to be absorbed in your work",
    "What makes you happy even with massive work",
    "How to overcome bad emotions",
  ]);
  let [likesNum, likesChange] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy[0] = "제한된 글";
          changePostTitle(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {postTitle[0]}{" "}
          <span
            onClick={() => {
              likesChange(likesNum++);
            }}
          >
            💡
          </span>
          {likesNum}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{postTitle[2]} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
