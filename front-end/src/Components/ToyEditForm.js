import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function ToyEditForm () {
const API = process.env.REACT_APP_API_URL;
let { id } = useParams();
let navigate = useNavigate();

const [toy, setToy] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    type: "",
    image: "",
    is_available: true
});

const updateToy = (updatedToy) => {
    axios
    .put(`${API}/toys/${id}`, updatedToy)
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

useEffect(() => {
    axios.get(`${API}/toys/${id}`).then(
    (response) => setToy(response.data.payload),
    () => navigate(`/toys`)
    );
}, [API, id, navigate]);

const handleSubmit = (event) => {
    event.preventDefault();
    updateToy(toy, id);
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
            value={toy.is_available}
            type="checkbox"
            checked={true}
            onChange={handleCheckboxChange}
        />
        <button className="back-main">Submit</button>
        <Link to={`/toys/${id}`}>
            <button className="back-main">Back</button>
        </Link>
    </form>
    </div>
    );
}

export default ToyEditForm;