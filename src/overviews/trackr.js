import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import './styles.css';
import Tag from '../components/Tag';
import Button from '../components/Button';

function Trackr() {


    const tags = ["fullstack", "algorithm", "data analysis", "lifestyle", "deployed"];
    const icons = ["react","js","aws","sqlite"];

    //3D animation
    const cubeRef = useRef(null);
    const backgroundimg = useRef(null);
    useEffect(() => {
        let animationStart = 0;
    let isAnimationStarted = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = 500;

      if (!isAnimationStarted && cubeRef.current) {
        const containerRect = cubeRef.current.getBoundingClientRect();
        let startOffset = 100; // Start the animation 100px before the div reaches the top

        if (containerRect.top <= startOffset) {
          animationStart = scrollY;
          isAnimationStarted = true;
        }
      }

      if (!isAnimationStarted && backgroundimg.current) {
        const containerRect = backgroundimg.current.getBoundingClientRect();
        let startOffset = 0; // Start the animation 100px before the div reaches the top

        if (containerRect.top <= startOffset) {
          animationStart = scrollY;
          isAnimationStarted = true;
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

        cubeRef.current.style.transform = `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale}) translateX(${translateX}vw) translateY(${translateY}vh)`;
        backgroundimg.current.style.backgroundSize = `${100}% ${scale2 * 100}%`;
    }
    

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);

  }, []);

    //fade-in effect
    const [sectionVisible, setSectionVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);
    const sectionRef = useRef(null); 
    const product = useRef(null); 
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    setSectionVisible(true); // Fade in 200px after it reaches the top of the screen
                } else {
                    setSectionVisible(false); // Fade out when scrolling back up
                }
            }
            if (backgroundimg.current) {
                const rect = backgroundimg.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    setSectionVisible(true); // Fade in 200px after it reaches the top of the screen
                } else {
                    setSectionVisible(false); // Fade out when scrolling back up
                }
            }
            if (product.current) {
                const rect = product.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight -200) {
                    setProductVisible(true); // Fade in 200px after it reaches the top of the screen
                } else {
                    setProductVisible(false); // Fade out when scrolling back up
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <div>
            <div ref={product} class="container center" style={{opacity: productVisible ? 1 : 0,
            transition: 'opacity 1s ease-in-out'}}>
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
            <div ref={backgroundimg} class="trackr-section" style={{overflowX:'hidden',maxWidth: '100vw',height:'100vh', 
            display: 'flex',justifyContent:'center', alignItems:'flex-start',opacity: sectionVisible ? 1 : 0,
            transition: 'opacity 1s ease-in-out'}}>
                <div ref={sectionRef} class="section-container" style={{opacity: sectionVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'}}>
                    <div style={{flex:1, display: 'flex', flexDirection: 'row', alignItems:'flex-end'}}>
                        <img src="./img/pics/trackr-icon.png" alt="trackr" style={{width: 100, objectFit: 'contain', borderRadius: 20, 
                        boxShadow: 'inset 2px 2px 6px rgba(255, 255, 255, 1), -2px 2px 10px rgba(0, 0, 0, 0.25)', marginRight: 10}}/>
                        <h1 style={{color: '#0C6863'}}>Trackr</h1>
                    </div>
                    <div style={{flex:2}}>
                        <p>Get valuable insights from the data you are recording every day to make your life better.
                        Trackr finds correlations between your own bundles of indicators, because you are unique.</p>
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
                    <div style={{flex:1}}>

                    </div>
                </div>
                <div style={{position: 'absolute', bottom: '10vh', display: 'flex', justifyContent:'center', alignItems:'center', width: '100%'}}>
                    <Button text="View Project" color="#0C6863" />
                </div>
            </div>
        </div>
    )
}
export default Trackr;