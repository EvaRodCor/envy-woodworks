import { Link } from "react-router-dom";
import "../Style/cart.css"

function CartItem ({ cart }) {


const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <div className="cart-container">
            {cart.map((toy) => { 
            return (
            <div className="wrapper" key={toy.id}>
            <div className="name-cart" > 
                {toy.name} 
            </div>
            <div className="image-cart">
                <Link to={`/toys/${toy.id}`}>
                <img className="image-cart" src={toy.image} alt="cart"/>
                </Link>
            </div>
            <div className="price-cart" >
                Price $ {toy.price}
            </div>
            </div>
            )})}
            <br></br>
            <br></br>
            <aside className="price-cart">
            <h4>Cart Total</h4>
            <br></br>
            <p className="money-plus" key={cart.id}> $ {numberWithCommas(cart.map(toy => toy.price)
            .reduce((acc, num) => (acc += num), 0).toFixed(2))}</p>
            </aside>
        </div>
            )
        }
        
    export default CartItem;