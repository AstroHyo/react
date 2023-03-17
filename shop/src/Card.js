import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import data from './data.js';
import VideoThumbnail from './videoThumbnail.js';

function Card(props){

    let navigate = useNavigate();
    let postData = data[props.id];

    return(
      <Col sm onClick={()=>{ navigate('/detail/' + postData.id) }}>
        <VideoThumbnail videoUrl={postData.videoUrl} />
        <h4>{postData.title}</h4>
        <p>{postData.view}</p>
      </Col>
    )
}
  
export default Card;