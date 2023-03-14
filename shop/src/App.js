import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [post] = useState(data);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KeepTube</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Recommend</Nav.Link>
            <Nav.Link href="#pricing">My page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Routes>
        <Route path="/" element={
          <Container>
            <Row>
              {
                post.map((a, i) => {
                  return (
                    <Card post={post[i]}/>
                  )
                })
              }
            </Row>
          </Container>
        }/>
        <Route path="/detail" element={<div>상세페이지</div>}/>
        <Route path="/about" element={<div>우리팀이에요</div>}/>
      </Routes>

      

    </div>
  );
}

function Card(props){
  return(
    <Col sm>
      <VideoThumbnail videoUrl={props.post.videoUrl} />
      <h4>{props.post.title}</h4>
      <p>{props.post.price}</p>
    </Col>
  )
}

//유튜브 썸네일 가져오는 코드
function VideoThumbnail({ videoUrl }) {
  const videoId = videoUrl.split("=")[1];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return <img src={thumbnailUrl} alt="Thumbnail" width="80%" />;
}


export default App;
