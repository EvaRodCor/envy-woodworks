import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import { useState } from "react";






function App() {
const [cart, setCart ] = useState([]);


const addToCart = (toy) => {
setCart([...cart, toy]);
};

  console.log(cart)
return (
    <div className="App">
      <NavBar/>
        <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/toys' element={<Index/>}/>
              <Route path='/toys/:id' element={<Show setCart={setCart} cart={cart} addToCart={addToCart}/>}/>
              <Route path='/toys/:id/edit' element={<Edit/>}/>
              <Route path='/toys/new' element={<New/>}/>
              <Route path='/toys/cart' element={<Cart cart={cart}/>}/>
            </Routes>
        </main>
    </div>
  );
}

export default App;
