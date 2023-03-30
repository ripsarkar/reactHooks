import {useRef} from 'react';
import './App.css';

function UserefApp() {
    const myRef = useRef();
    let findRef = () => {
        alert("Yes "+myRef.current.innerText);
    }
    return (
    <div>
        <div ref={myRef}>useRef works</div>
        <button onClick={findRef}>Check</button>
    </div>
        
    );
}

export default UserefApp;
