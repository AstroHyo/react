import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './../data.js';
import VideoThumbnail from '../videoThumbnail.js';

function Detail() {

    let [alert, setAlert] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 1000)
    })

    let [count, setCount] = useState(0)


    let {id} = useParams();
    let product = data.find(function(x){return x.id == id}); 

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning">
                    2초이내 구매시 확인
                </div>
                : null
            }
            
            {count}
            <button onClick={()=>{setCount(count+1)}}버튼></button>
            <div className="row">
                <div className="col-md-6">
                    <VideoThumbnail videoUrl={product.videoUrl} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}


export default Detail;