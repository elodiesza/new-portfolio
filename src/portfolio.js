import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import ScrollUp from './components/ScrollUp';
import Trackr from './overviews/trackr-ovw';
import FleetManager from './overviews/fleetmanager-ovw';

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
          
          const viewportHeight = window.innerHeight;
          const scrollTop = window.scrollY;
          const animationEndPoint = viewportHeight / 2;
          const scrollFraction = Math.min(scrollTop / animationEndPoint, 1);
          const secondAnimationStartPoint = viewportHeight / 3;
          // Animation for the second text completes at the next half viewport height (i.e., full viewport height from the top)
          const secondAnimationEndPoint = viewportHeight/2;
          let colorFraction2 = 0;
          if (scrollTop > secondAnimationStartPoint) {
            colorFraction2 = Math.min((scrollTop - secondAnimationStartPoint) / (secondAnimationEndPoint - secondAnimationStartPoint), 1);
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
    const cacheRef = useRef(null);
    const trackrRef2 = useRef(null);
    const cacheRef2 = useRef(null);
    useEffect(() => {
      const handleScroll = () => {
        const cacheRect = cacheRef.current.getBoundingClientRect();
        const cache2Rect = cacheRef2.current.getBoundingClientRect();
    
        if (cacheRect.bottom <= window.innerHeight) {
          // When bottom of cacheRef reaches bottom of viewport
          trackrRef.current.classList.add('sticky-bottom');
          trackrRef.current.classList.remove('sticky');
        } else if (cacheRect.top <= 0) {
          // When top of cacheRef reaches top of viewport
          trackrRef.current.classList.add('sticky');
          trackrRef.current.classList.remove('sticky-bottom');
        } else {
          // In all other cases
          trackrRef.current.classList.remove('sticky', 'sticky-bottom');
        }
  
        if (cache2Rect.bottom <= window.innerHeight) {
          // When bottom of cacheRef reaches bottom of viewport
          trackrRef2.current.classList.add('sticky-bottom');
          trackrRef2.current.classList.remove('sticky');
        } else if (cache2Rect.top <= 0) {
          // When top of cacheRef reaches top of viewport
          trackrRef2.current.classList.add('sticky');
          trackrRef2.current.classList.remove('sticky-bottom');
        } else {
          // In all other cases
          trackrRef2.current.classList.remove('sticky', 'sticky-bottom');
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize on component mount
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    //Funnel animation
    const funnelRef = useRef(null);
    useEffect(() => {
      const handleScroll = () => {
          if (funnelRef.current) {
              const funnelRect = funnelRef.current.getBoundingClientRect();
              const triggerHeight = window.innerHeight / 16;
    
              // Condition to show the redDiv
              if (funnelRect.top <= triggerHeight) {
                  document.getElementById('redDiv').style.display = 'flex';
              } else {
                  document.getElementById('redDiv').style.display = 'none';
              }
    
              // New condition to hide the redDiv before "Art" enters the second hole
              const secondHolePosition = funnelRect.height / 2.8; // Assuming the second hole is at 1/4th of the funnel's height
              if (funnelRect.top <= -secondHolePosition + window.innerHeight / 16) {
                  document.getElementById('redDiv').style.display = 'none';
              }
          }
      };
    
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize on component mount
    
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

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
                    <h2 ref={(el) => (elementsRef.current[0] = el)} className="slide-in" style={{fontWeight: 600}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> comprehensive coding skills
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[1] = el)} className="slide-in" style={{fontWeight: 600}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> a deep understanding of UX design principles 
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[2] = el)} className="slide-in" style={{fontWeight: 600}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> a relentless creativity for UI and design<br/> 
                    </h2>
                    <div style={{width: '100%',display:'flex', flexDirection: 'row', justifyContent:'center',alignItems:'center', marginTop:100}}>
                      <img ref={(el) => (elementsRef.current[3] = el)} src="./img/icons/js.png" alt="react" style={{ width: '30%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[4] = el)} src="./img/icons/html.png" alt="react" style={{ width: '30%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[5] = el)} src="./img/icons/css.png" alt="react" style={{ width: '30%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                    </div>
                    <div style={{width: '100%',display:'flex', flexDirection: 'row', justifyContent:'center',alignItems:'center',marginTop:40}}>
                      <img ref={(el) => (elementsRef.current[6] = el)} src="./img/icons/figma.png" alt="react" style={{ width: '30%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[7] = el)} src="./img/icons/protopie.png" alt="react" style={{ width: '30%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[8] = el)} src="./img/icons/aws.png" alt="react" style={{ width: '30%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                    </div>
                </div>
            </div>
            <div ref={cacheRef}  className="cache-container" style={{height: '250vh'}}>
              <div ref={trackrRef} style={{}}>
                <Trackr />
              </div>
            </div>
            <div style={{height:'100vh', justifyContent:'center', alignItems:'center', display: 'flex', width:'100%'}}>
              <div id="redDiv" style={{height:'100vh', position:'fixed', width: '100%',  display:'flex',
              flexDirection: 'column', bottom: 0, justifyContent:'center', alignItems:'center', zIndex: -1}}>
                <h1 style={{fontWeight: 700}}>All together</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>Art</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>Software engineering</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>UX design</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>Mechanical engineering</h1> <br/><br/><br/><br/>
                <h1 style={{fontWeight: 700,background: `linear-gradient(45deg, red, blue)`,WebkitBackgroundClip: 'text',
                backgroundClip: 'text',color: 'transparent'}}>Atomic</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>Beautiful</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>Optimized</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>User-centric</h1><br/><br/>
                <h1 style={{fontWeight: 700}}>Functional</h1> <br/><br/><br/><br/>
              </div>
              <div ref={funnelRef} id="funnel" style={{height:'100vh', position:'absolute', width: '100%',  display:'flex', 
              flexDirection: 'column'}}>
                <div style={{backgroundColor:'white', width:'100vw',height: `calc(40vh - 2.5em)`, display:'flex'}}></div>
                <div style={{width:'100vw', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <div style={{backgroundColor:'white', width:'30vw',height: '5em', display:'flex'}}></div>
                  <div style={{background:`linear-gradient(to bottom, white, transparent, white)`, width:'100%',height: '5em', display:'flex'}}></div>
                  <div style={{backgroundColor:'white', width:'30vw',height: '5em', display:'flex'}}></div>
                </div>
                <div style={{backgroundColor:'white', width:'100vw',height: `calc(34.5vh - 2.5em)`, display:'flex',
                justifyContent:'flex-start', alignItems: 'center', flexDirection:'column'}}>
                  <img src="./img/pics/funnel.png" alt="react" style={{ width: '10%', objectFit:'contain', height: 'auto', 
                  marginTop: 50, marginBottom: 50}} />
                </div>
                <div style={{width:'100vw', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <div style={{backgroundColor:'white', width:'30vw',height: '5em', display:'flex'}}></div>
                  <div style={{background:`linear-gradient(to bottom, white, transparent, white)`, width:'100%',height: '5em', display:'flex'}}></div>
                  <div style={{backgroundColor:'white', width:'30vw',height: '5em', display:'flex'}}></div>
                </div>
                <div style={{backgroundColor:'white', width:'100vw',height: `calc(25.5vh - 5em)`, display:'flex',
                justifyContent:'flex-start', alignItems: 'center', flexDirection:'column'}}>
                  <h1>Product Design</h1>
                </div>
              </div>
            </div>
            <div ref={cacheRef2}  className="cache-container" style={{height: '250vh'}}>
              <div ref={trackrRef2} style={{}}>
                <FleetManager />
              </div>
            </div>

            
            <ScrollUp color="white" />
        </div>
    );
}

export default Portfolio;
