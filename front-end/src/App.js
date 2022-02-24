import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";




function App() {
  
return (
    <div className="App">
      <NavBar/>
        <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/toys' element={<Index/>}/>
              <Route path='/toys/:id' element={<Show/>}/>
              <Route path='/toys/:id/edit' element={<Edit/>}/>
              <Route path='/toys/new' element={<New/>}/>
            </Routes>
        </main>
    </div>
  );
}

export default App;
