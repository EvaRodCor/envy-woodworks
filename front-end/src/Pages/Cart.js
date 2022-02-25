import CartItem from "../Components/CartItems";

function Cart ( { cart } ) {

return (
    <div className="cartScreen">
        <div className="cartScreen-left">
            <h2>Welcome to your Shopping Cart</h2> 
            <CartItem cart={cart}/>
        </div>
        </div>
        )
    }



export default Cart;