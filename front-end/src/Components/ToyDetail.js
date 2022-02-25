import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useSound from "use-sound";
import "../Style/Details.css";
import back from "../Audio/back.mp3";
import edit from "../Audio/edit.mp3";
import audioDelete from "../Audio/delete.mp3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';



function ToyDetail ({  cart, setCart, addToCart }) {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id }  = useParams();
    const [toy, setToy] = useState({});
    const [ mute, setMute ] = useState(false);
    


const handleClick = () => {
    setMute({ ...mute, clicked: !mute.clicked });
};


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


const [playbackRate, setPlaybackRate] = useState(0.75);

const[play, { stop }] = useSound(back, {
    volume: 0.5,
});

const [play2, { stop2 }] = useSound(edit, {
    volume: 0.5,
});

const [play3, { stop3 }] = useSound(audioDelete, {
    volume: 0.5,
});

const backClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play(back);
};

const editClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play2(edit);
};

const deleteClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play3(audioDelete);
    stop(audioDelete);
};

// let newCart = [];

// const addToCart = (toy) => {
//     let itemInCart = newCart.find(
//     (item) => toy.name === item.name
//     );
//     if (itemInCart) {
//         newCart.push(itemInCart);
//     }
    
//     setCart({...cart, toy });

// };



return (
    <main className="toys-wrapper">
        <div className="left-column"><img className="detail-img" src={toy.image} alt={toy.name}/></div>
            <div className="container-two">
                    <h1 className="detail-name">{toy.name}</h1>
                    <p className="detail-description">{toy.description}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4 className="detail-price">Price: {"$" + toy.price}</h4>
                <div className="detail-available">
                    {toy.is_available ?
                    (<p style={{ color: "green" }}>{"Available"}</p>) : 
                    (<p style={{ color: "red" }}>{"Out of stock"}</p>)}
                    <br></br>
        <div className='icon-detail' onClick={handleClick}>
        {mute.clicked ? 
        (<FontAwesomeIcon icon={faVolumeXmark}/>) : 
        (<FontAwesomeIcon icon={faVolumeOff}></FontAwesomeIcon> )}
        </div> 
        <Link to={`/toys/cart`}>
        <button className="btn-add-cart" onClick={() => { addToCart(toy) }} >ADD TO CART</button>
        </Link>
        <br></br>
        <br></br>
                </div>
            </div>
            
        <div>
            <Link to="/toys">
            <button className="btn" onClick={!mute.clicked ? backClick : stop}>Back</button>
            </Link>
        </div>
        <div>
            <Link to={`/toys/${toy.id}/edit`}>
            <button className="btn" onClick={!mute.clicked ? editClick : stop2 }>Edit</button>
            </Link>
        </div>
        <div>
            <button className="btn" 
            onClick={!mute.clicked ? () => {
                handleDelete(); deleteClick();
            } : () => {
                handleDelete(); stop3(); }}>Delete</button>
        </div>
    </main>
    );
}
export default ToyDetail;