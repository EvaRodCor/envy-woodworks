import { Link } from "react-router-dom";
import '../Style/Toys.css';

function OneToy({ toy }) {

return (
<div className="toy">
    <section className="toys-section">
        <article className="card">
            <strong className="name">{toy.name}</strong>
            
                <br></br>
                    <Link style={{ textDecoration: 'none' }} to={`/toys/${toy.id}`}>
                        <img className="toy-img" src={toy.image} alt="toy"></img>
                        <div className="container-one">
                            <span className="description">{toy.description}</span>
                            <br></br>
                            <br></br>
                            <h4 className="price"> Price: {"$" + toy.price}</h4>
                            <br></br>
                        <div className="available">
                            {toy.is_available ?
                            (<p style={{ color: "green" }}>{"Available"}</p>) : 
                            (<p style={{ color: "red" }}>{"Out of stock"}</p>)}
                        </div>
                            <br></br>
                        </div>
                    </Link>
        </article>
    </section>
    <br></br>
    <br></br>
</div>
    );
}

export default OneToy;
