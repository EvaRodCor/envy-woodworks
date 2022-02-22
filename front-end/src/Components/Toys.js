import axios from "axios";
import OneToy from "./OneToy";
import { useState, useEffect } from 'react';
import '../Style/Toys.css';

function Toys() {
const API = process.env.REACT_APP_API_URL;
const [toys, setToys ] = useState([]);

useEffect(() => {
    axios
    .get(`${API}/toys`)
    .then((response) => setToys(response.data.payload))
    .catch((error) => console.log(error));
}, [API]);

return (
    <div>
        <div className="toys-container">
            <main>
                {toys.map((toy) => {
                return <OneToy key={toy.id} toy={toy} />;
            })}
            </main>
        </div>
    </div>
    );
}

export default Toys;
