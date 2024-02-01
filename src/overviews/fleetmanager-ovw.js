import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import Tag from '../components/Tag';
import Button from '../components/Button';

function FleetManager() {


    const tags = ["UX design", "Industry use case", "Automotive","Product design"];
    const icons = ["figma"];


    //3D animation
    const backgroundimg = useRef(null);
    useEffect(() => {
        let animationStart = 0;
        let isAnimationStarted = false;

        const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScrollY = 500;

        if (!isAnimationStarted && backgroundimg.current) {
            const containerRect = backgroundimg.current.getBoundingClientRect();
            let startOffset = 0; 

            if (containerRect.top <= startOffset) {
            animationStart = scrollY;
            isAnimationStarted = true;
            }
        }

        let scrollProgress = 0;
        if (isAnimationStarted && scrollY >= animationStart) {
            scrollProgress = Math.min((scrollY - animationStart) / maxScrollY, 1);
        }

            const scale2 = 1 + 0.4 * scrollProgress; 
            backgroundimg.current.style.backgroundSize = `${scale2 * 30}% ${scale2 * 70}%`;
        }
        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return(
        <div ref={backgroundimg} class="trackr-section" style={{overflowX:'hidden',height:'100vh',
        display: 'flex',justifyContent:'center', alignItems:'flex-start', flexDirection: 'column', overflow:'hidden',
        backgroundImage: `url("./img/pics/A-background.png")`, backgroundColor: '#323232', 
        backgroundSize:'50% 100vh', backgroundPosition:'right', backgroundRepeat: 'no-repeat', transition: 'opacity 0.5s ease',
        opacity: 1}}>
            <div style={{overflowX:'hidden', height: '100vh',width: '100vw',
            display: 'flex',justifyContent:'center', alignItems:'flex-start', flex:3, overflow:'hidden'}}>
                <div class="fleet-section-container" >
                    <div style={{display: 'flex', flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                    borderLeftStyle: 'solid', paddingLeft: 20}}>
                        <p style={{color: '#ffffff'}}>Industrial software design</p>
                        <h1 style={{color: '#FFD645'}}>Autonomous Fleet Manager</h1>
                    </div>
                    
                    <div class="overview-content">
                        <div></div>
                        <p style={{color:'white'}}>This UX case study focuses on designing a user interface for an innovative software product dedicated to managing 
                            autonomous fleets in the last-mile logistics of car manufacturing. </p>
                        <div>
                            <div style={{display: 'flex',flexDirection:'row', flexWrap: 'wrap', width:'100%'}}>
                                {tags.map((text, index) => (
                                    <Tag key={index} text={text} color={'#878787'} />
                                ))}
                            </div>
                            <div style={{display: 'flex',flexDirection:'row', flexWrap: 'wrap', width:'100%', marginTop: 10}}>
                                {icons.map((src, index) => (
                                    <img src={"./img/icons/"+src+".png"} style={{objectFit: 'contain', width: 30, height: 30, marginRight: 8, marginTop:8}} 
                                    alt={src} key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{flex:1}}>

                    </div>
                    <img src="./img/pics/fleet-mac-cut.png" alt="fleet" style={{width:'30vw',position:'absolute', top:'30vh', right: 0, objectFit: 'contain'}}/>
                </div>
            </div>
            <div style={{flex:1, bottom: '10vh', display: 'flex', justifyContent:'center', alignItems:'center', width: '100%'}}>
                <Button text="View Project" color="#FFD645" textcolor="#323232" path={"fleet"} />
            </div>
        </div>
    )
}
export default FleetManager;