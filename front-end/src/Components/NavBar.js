import { Link } from 'react-router-dom';
import logo from "../Components/logo_kids.png";
import "../Style/NavBar.css";
import home from "../Audio/home.mp3";
import addToy from "../Audio/add-toy.mp3";
import toySound from "../Audio/toys.mp3";
import useSound from 'use-sound';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';






function NavBar() {
    const [playbackRate, setPlaybackRate] = useState(0.75);
    const [ mute, setMute ] = useState(false);


const handleClick = () => {
    setMute({ ...mute, clicked: !mute.clicked });
};

    

    const[play, { stop } ] = useSound(home, {
        volume: 0.5,
    });

    const [play2, { stop2 } ] = useSound(addToy, {
        volume: 0.5,
    });

    const [play3, { stop3 } ] = useSound(toySound, {
        volume: 0.5,
    });

    const homeClick = () => {
        setPlaybackRate(playbackRate + 0.1);
        play(home)
        // stop(home);
    };

    const addClick = () => {
        setPlaybackRate(playbackRate + 0.1);
        play2(addToy);
        // stop2(addToy);
    };

    const toysClick = () => {
        setPlaybackRate(playbackRate + 0.1);
        play3(toySound);
        // stop3(toySound);
    };


return (
    <nav>
        <img className="logo" src={logo} alt="logo"></img>

        <div className='icon' onClick={handleClick}>
        {mute.clicked ? 
        (<FontAwesomeIcon icon={faVolumeXmark}/>) : 
        (<FontAwesomeIcon icon={faVolumeOff}></FontAwesomeIcon> )}
        </div>

        <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="home" onClick={!mute.clicked ? homeClick : stop }>HOME</button>
        </Link>
        
        
        <Link to="/toys" style={{ textDecoration: 'none' }}>
        <button className='toys' onClick={!mute.clicked ? toysClick : stop2 }>TOYS</button>
        </Link>
        
        
        <Link to="/toys/new" style={{ textDecoration: 'none' }}>
        <button className="add" onClick={!mute.clicked ? addClick : stop3}>ADD TOY</button>
        </Link>
    </nav>
    );
}

export default NavBar;