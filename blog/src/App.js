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
        <h4>๋ธ๋ก๊ทธ์</h4>
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
                  }}> ๐ก </span>
                {likesNum[i]}
              </h4>
              <p>2์ 17์ผ ๋ฐํ</p>
              <button onClick={(i) => {
                const newPostTitle = [...postTitle];
                newPostTitle.splice(i, 1)
                setPostTitle(newPostTitle);
              }}>๊ธ์ญ์ </button>
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
        <Modal setPostTitle={setPostTitle} postTitle={postTitle} modalTitle={modalTitle}/>
      ) : null}

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[props.modalTitle]}</h4>
      <p>๋ ์ง</p>
      <p>์์ธ๋ด์ฉ</p>
      <button>๊ธ์์ </button>
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
//       <div>์๋, {this.props}</div>
//     )
//   }
// }

export default App;
