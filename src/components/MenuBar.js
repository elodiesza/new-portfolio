import React from "react";
import '../styles.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div style={{width:'100vw', justifyContent:'center', alignItems:'center', display:'flex', zIndex:1000}}>
             <div style={{justifyContent: 'space-between', height: 50, position: 'fixed', marginLeft:20,top: 0, width:'100%', 
             maxWidth:1000, flexDirection:'row', display:'flex', zIndex: 1000}}>
                <h1 style={{fontSize: 50,fontWeight: 500, zIndex: 1000, color: isOpen? 'white': 'black'}} onClick={toggleMenu}>≡</h1>
                {isOpen && (
                    <div class="full-screen-menu" onClick={toggleMenu}>
                        <ul>
                            <li><Link to={"/"} style={{color:'white', fontWeight: 600}} onClick={toggleMenu}>Home</Link></li>
                            <li><HashLink smooth to='/#trackr'  onClick={toggleMenu} style={{color:'white', fontWeight: 600}}>Projects</HashLink></li>
                            <li><a href="https://elodiesza.com/php/resume.php" target="_blank" rel="noopener noreferrer" style={{color:'white', fontWeight: 600}}>
                                Resume</a></li>
                        </ul>
                    </div>
                )}
                <div style={{marginTop: 20, marginRight: 20}}>
                    <a href="https://www.linkedin.com/in/elodieszablewski/" target="_blank" rel="noopener noreferrer">
                        <img src="./img/icons/linkedin.png" alt="linkedin" style={{width:20, height:20, marginLeft:10, marginRight:10}}/>
                    </a>
                    <a href="https://github.com/elodiesza" target="_blank" rel="noopener noreferrer">
                        <img src="./img/icons/github.png" alt="github" style={{width:20, height:20, marginLeft:10, marginRight:10}}/>
                    </a>
                    <a href="mailto:elodie.sza@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="./img/icons/gmail.png" alt="gmail" style={{width:20, height:20, marginLeft:10, marginRight:10}}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;