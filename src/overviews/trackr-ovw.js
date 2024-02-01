import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import Tag from '../components/Tag';
import Button from '../components/Button';
import TitleElement from '../components/TitleElement';

function Trackr() {

    const tags = ["fullstack", "algorithm", "data analysis", "lifestyle", "deployed"];
    const icons = ["react","js","aws","sqlite","figma","protopie","python"];

    const cubeRef = useRef(null);
    const backgroundimg = useRef(null);
    const sectionRef = useRef(null);
    const product = useRef(null); 
    const sectionButton = useRef(null); 

    //3D animation
    const [sectionOpacity, setSectionOpacity] = useState(0); 

    useEffect(() => {
        let animationStart = 0;
        let isAnimationStarted = false;
        let sectionFadeStart = 0; 

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScrollY = 500;

            if (!isAnimationStarted && backgroundimg.current) {
                const containerRect = backgroundimg.current.getBoundingClientRect();
                let startOffset = 0;

                if (containerRect.top <= startOffset) {
                    animationStart = scrollY;
                    isAnimationStarted = true;
                    sectionFadeStart = animationStart + 100; 
                }
            }

            let scrollProgress = 0;
            if (isAnimationStarted && scrollY >= animationStart) {
                scrollProgress = Math.min((scrollY - animationStart) / maxScrollY, 1);
            }

            const rotateY = -30 * scrollProgress; 
            const rotateZ = 5 * scrollProgress;  
            const scale = 1 - 0.45 * scrollProgress; 
            const scale2 = 1 - 0.4 * scrollProgress; 
            const translateX = 60 * scrollProgress; 
            const translateY = 5 * scrollProgress;  

            if (cubeRef.current) {
                cubeRef.current.style.transform = `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale}) translateX(${translateX}vw) translateY(${translateY}vh)`;
            }
            if (backgroundimg.current) {
                backgroundimg.current.style.backgroundSize = `${100}% ${scale2 * 100}%`;
            }

            
            if (scrollY > sectionFadeStart) {
                const newOpacity = Math.min((scrollY - sectionFadeStart) / (maxScrollY - 100), 1);
                sectionRef.current.style.transform = `scale(${scrollProgress})`;
                setSectionOpacity(newOpacity); 
            } else {
                setSectionOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    window.addEventListener('beforeunload', function () {
        document.querySelector('.page-transition').classList.add('trackr-section-exit');
    });




    return(
        <div class="trackr-section" ref={backgroundimg} style={{overflowX:'hidden',maxWidth: '100vw',height:'100vh',
        display: 'flex',justifyContent:'center', alignItems:'flex-start', flexDirection: 'column'}}>
            <div ref={product} class="container center">
                <div class="cube-wrapper">
                    <div class="cube" ref={cubeRef}>  
                        <div class="front-side">
                            <img src="./img/pics/trackr.png" alt="trackr"/>
                        </div>
                        <div class="back-side">
                            <img src="./img/pics/trackr.png" alt="trackr"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{overflowX:'hidden', height: '100vh',width: '100vw',
            display: 'flex',justifyContent:'center', alignItems:'flex-start', flex:3, overflow:'hidden'}}>
                <div ref={sectionRef} class="section-container"  style={{opacity: sectionOpacity}}>
                    <TitleElement text="Trackr" img="trackr-icon"/>
                    <div class="overview-content">
                        <div></div>
                        <p>Get valuable insights from the data you are recording every day to make your life better.
                        Trackr finds correlations between your own bundles of indicators, because you are unique.</p>
                        <div>
                            <div style={{display: 'flex',flexDirection:'row', flexWrap: 'wrap', width:'100%'}}>
                                {tags.map((text, index) => (
                                    <Tag key={index} text={text} color={'#85BCB4'} />
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
                </div>
            </div>
            <div ref={sectionButton} style={{flex:1, bottom: '10vh', display: 'flex', justifyContent:'center', alignItems:'center', width: '100%'}}>
                <Button text="View Project" color="#0C6863" textcolor='white' path={"/trackr"} />
            </div>
        </div>
    )
}
export default Trackr;