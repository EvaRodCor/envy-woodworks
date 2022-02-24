import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/New.css';
import useSound from "use-sound";
import back from "../Audio/back.mp3";
import submit from "../Audio/submit.mp3";

const API = process.env.REACT_APP_API_URL;

function NewToyForm() {
// let { id } = useParams();
let navigate = useNavigate();

const [toy, setToy] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    type: "",
    is_available: true,
    image: "",
});



const newToy = (addedToy) => {
    axios
    .post(`${API}/toys/`, addedToy)
    .then(
        () => {
        navigate(`/toys`);
        },
        (error) => console.error(error)
    )
    .catch((err) => console.warn("catch", err));
};




const handleTextChange = (event) => {
    event.target.id === "price"
    ? setToy({ ...toy, [event.target.id]: Number(event.target.value) })
    : setToy({ ...toy, [event.target.id]: event.target.value });
};




const handleCheckboxChange = () => {
    setToy({ ...toy, is_available: !toy.is_available });
};



const handleSubmit = (event) => {
    event.preventDefault();
    newToy(toy);
};



const [playbackRate, setPlaybackRate] = useState(0.75);

const[play] = useSound(back, {
    volume: 0.5,
});

const [play2] = useSound(submit, {
    volume: 0.5,
});


const backClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play(back);
};

const submitClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play2(submit);
};



return (
    <div className="add-container">
    <form className="add-form" onSubmit={handleSubmit}>
        <label className="new-name" htmlFor="name">Name</label>
        <br></br>
        <input
            className="new--input"
            id="name"
            value={toy.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of toy"
            required
        />
        <br></br>
        <br></br>
        <label className="description" htmlFor="description">Description</label>
        <br></br>
        <input
            className="new--input"
            id="description"
            type="text"
            value={toy.description}
            onChange={handleTextChange}
            placeholder="Enter toy description"
        />
        <br></br>
        <br></br>
        <label className="category" htmlFor="category">Category</label>
        <br></br>
        <input
            className="new--input"
            id="category"
            value={toy.category}
            type="text"
            onChange={handleTextChange}
            placeholder="Enter category"
        />
        <br></br>
        <br></br>
        <label className="type" htmlFor="type">Type</label>
        <br></br>
        <input
            className="new--input"
            id="type"
            value={toy.type}
            type="text"
            onChange={handleTextChange}
            placeholder="Enter type"
        />
        <br></br>
        <br></br>
        <label className="image" htmlFor="image">Image</label>
        <br></br>
        <input
            className="new--input"
            id="image"
            value={toy.image}
            type="text"
            onChange={handleTextChange}
            placeholder="Please paste image URL"
        />
        <br></br>
        <br></br>
        <br></br>
        <label className="price" htmlFor="price">price $   </label>
        <input
            className="new--input"
            id="price"
            value={toy.price === 0 ? " " : toy.price}
            type="number"
            onChange={handleTextChange}
            placeholder="Enter toy price"
            required
        />
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="is_available">Available:   </label>
        <input
            id="is_available"
            value={toy.is_available }
            type="checkbox"
            checked={true}
            onChange={handleCheckboxChange}
        /> 
        <button className="back-main" onClick={submitClick}>Submit</button>
        <Link to={'/toys'}>
        <button className="back-main" onClick={backClick}>Back</button>
        </Link>
    </form>
    </div>
    );
}

export default NewToyForm;