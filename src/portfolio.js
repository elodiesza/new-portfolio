import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import ScrollUp from './components/ScrollUp';
import Trackr from './overviews/trackr';
import FleetManager from './overviews/fleetmanager';

function Portfolio() {

    // Parallax effect on image     
    const [imageWidth, setImageWidth] = useState('90%');
    const imageRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const scrollDistance = window.innerHeight / 4; 
          const scrollTop = window.scrollY;
          const newWidth = Math.max(60, 95 - (35 * scrollTop / scrollDistance)); 
          setImageWidth(`${newWidth}%`);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    //Text Highlight effect on scroll out
    useEffect(() => {
        const handleScroll = () => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollTop = window.scrollY;
          const scrollFraction = scrollTop / scrollHeight;
                    let colorFraction2;
          const halfwayPoint = scrollHeight / 2;
          if (scrollTop > halfwayPoint) {
            // Calculate fraction based on the distance scrolled past the halfway point
            const scrollFraction2 = (scrollTop - halfwayPoint) / (scrollHeight - halfwayPoint);
            colorFraction2 = Math.min(scrollFraction2 * 2, 1); // Accelerate the rate and clamp at 1
          } else {
            colorFraction2 = 0; // No color change before halfway
          }
    
          const colorFraction = Math.min(scrollFraction * 3, 1); // Double the rate and clamp at 1
          document.documentElement.style.setProperty('--text-color', `rgb(${255 * colorFraction}, ${255 * colorFraction}, ${255 * colorFraction})`);
          document.documentElement.style.setProperty('--text-shadow', `1px 2px 4px rgba(60, 20, 100,${colorFraction})`);
          document.documentElement.style.setProperty('--text-color2', `rgb(${255 * colorFraction2}, ${255 * colorFraction2}, ${255 * colorFraction2})`);
          document.documentElement.style.setProperty('--text-shadow2', `1px 2px 4px rgba(60, 20, 100,${colorFraction2})`);

        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //Slide in effect 
    const elementsRef = useRef([]);
    useEffect(() => {
      function checkVisible(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top - window.innerHeight+100) < 0;
      }
  
      function handleScroll() {
        elementsRef.current.forEach((element) => {
          if (checkVisible(element) && !element.classList.contains('active')) {
            element.classList.add('active');
          }
        });
      }
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    //Sticky Section
    const trackrRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [stickyEnd, setStickyEnd] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        if (trackrRef.current) {
            const trackrRect = trackrRef.current.getBoundingClientRect();
            if (!isSticky && trackrRect.top <= 0) {
            setIsSticky(true);
            setStickyEnd(window.scrollY + 1000); // Set the end point for sticky positioning
            }

            // Check if the sticky phase has ended
            if (isSticky && window.scrollY >= stickyEnd) {
            setIsSticky(false);
            }
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky, stickyEnd]);


    return (
        <div className="body">
            {/* Intro */}
            <div className="introcontainer">
                <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{padding: 40, maxWidth: 700, zIndex:1}}>
                        Hello, <br/><br/>
            
                        I am <span style={{fontWeight: 700, color: 'var(--text-color)', textShadow: 'var(--text-shadow)'}}>Elodie Szablewski</span>, I have been programming and creating products for 13 years.<br/><br/>
            
                        As a lifelong artist with a background in mechanical engineering and business, I bring a unique 
                        edge to <span style={{fontWeight: 700, color: 'var(--text-color2)', textShadow: 'var(--text-shadow2)'}}>product design and development</span> projects.
                    </h1>
                    <img ref={imageRef} src="./img/icons/react-light.png" alt="react" style={{ width: imageWidth, maxWidth:600, borderRadius: 150, position: 'absolute', left: '5%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                </div>
                <div style={{height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', paddingLeft: 40, paddingRight:40, maxWidth: 700, zIndex: 1, lineHeight: 2 }}>
                    <h2 ref={(el) => (elementsRef.current[0] = el)} className="slide-in">
                        Through the following projects I will demonstrate <br/> 
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[1] = el)} className="slide-in" style={{fontWeight: 600}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> comprehensive coding skills
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[2] = el)} className="slide-in" style={{fontWeight: 600}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> a deep understanding of UX design principles 
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[3] = el)} className="slide-in" style={{fontWeight: 600}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> a relentless creativity for UI and design<br/> 
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[4] = el)} className="slide-in" style={{width:'100%',alignItems: 'flex-end', textAlign:'right'}}>
                        in a A-Z product development context.
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[5] = el)} className="slide-in">
                        I will also illustrate how engineering and business acumen valuably contribute to these projects.
                    </h2>
                </div>
            </div>
            <div ref={trackrRef} style={{maxWidth: '100vw',position: isSticky ? 'sticky' : 'static', top: 0}}>
                <Trackr />
            </div>
            <div style={{height: '600vh'}}>

            </div>
            
            <ScrollUp color="white" />
        </div>
    );
}

export default Portfolio;
