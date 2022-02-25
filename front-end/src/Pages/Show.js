import ToyDetail from "../Components/ToyDetail";

function Show ({ cart, setCart, addToCart }) {
    return (
        <div className="Show">
            <h2><ToyDetail setCart={setCart} cart={cart} addToCart={addToCart}/></h2>

        </div>
        )
    }
    
    export default Show;