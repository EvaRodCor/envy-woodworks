import { Link } from 'react-router-dom';
import logo from "../Components/logo_kids.png";
import "../Style/NavBar.css";

function NavBar() {
return (
    <nav>
        <button className="home">
        <Link to="/" style={{ textDecoration: 'none' }}>HOME</Link>
        </button>
        <img className="logo" src={logo} alt="logo"></img>
        <button className="toys">
            <Link to="/toys" style={{ textDecoration: 'none' }}>TOYS</Link>
        </button>
        <button className='add'>
            <Link to="/toys/new" style={{ textDecoration: 'none' }}>ADD TOY</Link>
        </button>
    </nav>
    );
}

export default NavBar;