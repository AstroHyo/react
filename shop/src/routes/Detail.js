import { useParams } from 'react-router-dom';

function Detail(props) {

    let {id} = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.post[id].title}</h4>
                    <p>{props.post[id].title}</p>
                    <p>{props.post[id].title}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}


export default Detail;