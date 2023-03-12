import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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

      <Container>
        <Row>
          <Col sm>
            <VideoThumbnail videoUrl="https://www.youtube.com/watch?v=qRIcX0oJ1k4" />
            <h4>How to be absorbed in your work</h4>
            <p>내용 요약</p>
          </Col>
          <Col sm>
            <VideoThumbnail videoUrl="https://www.youtube.com/watch?v=zBQa48lLuVg" />
            <h4>What makes you happy even with massive work</h4>
            <p>내용 요약</p>
          </Col>
          <Col sm>
            <VideoThumbnail videoUrl="https://www.youtube.com/watch?v=o_qXV6SKJLk" />
            <h4>How to overcome bad emotions</h4>
            <p>내용 요약</p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

function VideoThumbnail({ videoUrl }) {
  const videoId = videoUrl.split("=")[1];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return <img src={thumbnailUrl} alt="Thumbnail" width="80%" />;
}


export default App;
