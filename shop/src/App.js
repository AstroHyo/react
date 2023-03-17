import { useState } from "react";
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
import Detail from './routes/Detail.js';
import Upload from './routes/Upload.js';
import Card from "./Card";

function App() {

  let [post] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>KeepTube</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <Button variant="outline-danger" onClick={()=>{ navigate('/upload') }}>
            Take your note!
          </Button>
          <Container>
            <Row>
              { post.map((a, i) => {
                  return <Card id={i}/>
              })}
            </Row>
          </Container>
          </>
        }/>

        <Route path="/upload" element={ 
            <Upload/>
        }/>

        <Route path="/detail/:id" element={<Detail/>}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>주소임</div>}/>
        </Route>

        <Route path="*" element={<div>404페이지</div>}/>
      </Routes>

    </div>
  );
}


function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
