import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../Style/Details.css";

function ToyDetail () {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id }  = useParams();
    const [toy, setToy] = useState({});


useEffect(() => {
    axios.get(`${API}/toys/${id}`)
    .then((response) => setToy(response.data.payload))
    .catch((err) => console.warn(err))
},[API, id])


const handleDelete = () => {
    axios.delete(`${API}/toys/${id}`).then(() => {
        navigate("/toys");
    }, (err) => console.error(err)).catch((err) => console.warn(err));
};


return (
    <main className="toys-wrapper">
        <div className="left-column"><img className="detail-img" src={toy.image} alt={toy.name}/></div>
            <div className="container-two">
                    <h1 className="detail-name">{toy.name}</h1>
                    <p className="detail-description">{toy.description}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4 className="detail-price">Price: {"$" + toy.price}</h4>
                <div className="detail-available">
                    {toy.is_available ?
                    (<p style={{ color: "green" }}>{"Available"}</p>) : 
                    (<p style={{ color: "red" }}>{"Out of stock"}</p>)}
                </div>
            </div>
            

        <div>
            <Link to="/toys">
            <button className="btn">Back</button>
            </Link>
        </div>
        <div>
            <Link to={`/toys/${toy.id}/edit`}>
            <button className="btn">Edit</button>
            </Link>
        </div>
        <div>
            <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
    </main>
    );
}
export default ToyDetail;