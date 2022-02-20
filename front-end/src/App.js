import axios from "axios";
import { useState, useEffect } from "react";
import toys from "../../back-end/controllers/toysController";
const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/toys`)
      .then(
        (response) => {
          setDays(response.data);
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
