import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}toys`)
      .then(
        (response) => {
          setToys(response.data.payload);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <ul>
        {toys.map((toy) => (
          <li key={toy.name}>{toy.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
