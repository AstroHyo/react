/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState([
    "How to be absorbed in your work",
    "What makes you happy even with massive work",
    "How to overcome bad emotions",
  ]);
  let [likesNum, changeLikesNum] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {
        postTitle.map(function (a, i) {
          return (
            <div className="list">
              <h4 onClick={() => {setModal(!modal); setModalTitle(i); }}>
                {a}
                <span onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...likesNum];
                    copy[i]++;
                    changeLikesNum(copy);
                  }}> 💡 </span>
                {likesNum[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={(i) => {
                const newPostTitle = [...postTitle];
                newPostTitle.splice(i, 1)
                setPostTitle(newPostTitle);
              }}>글삭제</button>
            </div>
          );
        })
      }

      <div>
        <h4>upload a new post</h4>
        <input onChange={(e)=>{
          setInputValue(e.target.value); 
        }}
        ></input>
        <button onClick={()=>{ setPostTitle([...postTitle, inputValue])}}>upload</button>
      </div>
      
      {modal == true ? (
        <Modal changePostTitle={changePostTitle} postTitle={postTitle} modalTitle={modalTitle}/>
      ) : null}
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name : 'kim',
//     }
//   }
//   render(){
//     return (
//       <div>안녕, {this.props}</div>
//     )
//   }
// }

export default App;
