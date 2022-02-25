import { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/Toys.css';
import useSound from "use-sound";
import click from '../Audio/click.wav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';


function OneToy({ toy }) {
const [playbackRate, setPlaybackRate] = useState(0.75);
const [ mute, setMute ] = useState(false);


const handleClick = () => {
    setMute({ ...mute, clicked: !mute.clicked });
};



const [play, { stop }] = useSound(click, {
    playbackRate,
    volume: 0.5,
});


const Click = () => {
    setPlaybackRate(playbackRate + 0.1);
    play(click);
};
    

return (
<div className="toy-itemContainer">
{(<div className='icon-toy' onClick={handleClick}>
        {mute.clicked ? 
        (<FontAwesomeIcon icon={faVolumeXmark}/>) : 
        (<FontAwesomeIcon icon={faVolumeOff}></FontAwesomeIcon> )}
        </div>)}
    <section className="toys-section">
        <article className="card">
            <strong className="name">{toy.name}</strong>
            
                <br></br>
                    <Link onClick={!mute.clicked ? Click : stop} style={{ textDecoration: 'none' }} to={`/toys/${toy.id}`}>
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
};

export default OneToy;
