/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, changePostTitle] = useState([
    "How to be absorbed in your work",
    "What makes you happy even with massive work",
    "How to overcome bad emotions",
  ]);
  let [likesNum, changeLikesNum] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={() => { 
          let copy = [...postTitle]; 
          copy[0] = "제한된 글";
          changePostTitle(copy);
        }}>
      글수정
      </button>

      {
        postTitle.map(function (a, i) {
          return (
            <div className="list">
              <h4 onClick={() => {setModal(!modal);}}>
                {a}
                <span onClick={() => {
                    let copy = [...likesNum];
                    copy[i]++;
                    changeLikesNum(copy);
                  }}
                > 💡 </span>
                {likesNum[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      {modal == true ? (
        <Modal changePostTitle={changePostTitle} postTitle={postTitle} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {props.changePostTitle(["1", "2", "3"]);}} >
        글수정
      </button>
    </div>
  );
}

export default App;
