import React from 'react';
import '../styles.css';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

function ProjectsCarousel() {

    return(
        <div style={{overflowX:'hidden', flexDirection: 'column', width: '100vw',
        display: 'flex', alignItems: 'center',justifyContent:'flex-start'}}>
            <div style={{width: '100%', zIndex: 2, maxWidth: 1000}}>
                <div style={{margin: '0 -20px'}}>
                    <Flicking
                    circular={true}
                    className="flicking flicking0"
                    gap={10}>
                        <a href="https://www.elodiesza.com/php/index.php" target="_blank" rel="noopener noreferrer">
                        <div className="cardprojects">
                            <img src="./img/pics/elodiesza.png" alt="elodiesza" style={{width:'100%', objectFit:'contain',height:'auto'}}/>
                            <p>Visit my old portfolio for more projects and contents ✨ In the waiting of building this new portfolio. :)</p>
                        </div>
                        </a>
                        <a href="https://www.elodiesza.com/php/station-fr.php" target="_blank" rel="noopener noreferrer">
                        <div className="cardprojects">
                            <img src="./img/pics/stationfr-screen.png" alt="stationfr" style={{width:'100%', objectFit:'contain',height:'auto'}}/>
                            <p>Station FR is a dedicated platform created for French enthusiasts seeking to learn the language  
                                in a playful manner, through the Parisian subway lines.</p>
                        </div>
                        </a>
                        <div className="cardprojects">
                            <img src="./img/pics/gmd-screen.png" alt="stationfr" style={{width:'100%', objectFit:'contain',height:'auto'}}/>
                            <p>Helping an entrepreneur to work on a new game-like mobile app, building up a branding and the UX design.
                                <br/> 🚧 Project page in construction 🚧 </p>
                        </div>
                        <a href="https://www.elodiesza.com/php/listr.php" target="_blank" rel="noopener noreferrer">
                        <div className="cardprojects">
                            <img src="./img/pics/listr-screen.png" alt="listr" style={{width:'100%', objectFit:'contain',height:'auto'}}/>
                            <p>Hyper productive tasks list / task organization app, with prioritization, project management and scheduling features. </p>
                        </div>
                        </a>
                    </Flicking>
                </div>
            </div>
        </div>
    )
}
export default ProjectsCarousel;