import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import ScrollUp from './components/ScrollUp';
import Trackr from './overviews/trackr-ovw';
import FleetManager from './overviews/fleetmanager-ovw';
import MenuBar from './components/MenuBar';
import ProjectsCarousel from './overviews/projects-carousel';

function Portfolio() {

 
  const [isSent, setIsSent] = useState("If you have any questions, please feel free to reach out.");
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
          const secondAnimationEndPoint = viewportHeight/2;
          let colorFraction2 = 0;
          if (scrollTop > secondAnimationStartPoint) {
            colorFraction2 = Math.min((scrollTop - secondAnimationStartPoint) / (secondAnimationEndPoint - secondAnimationStartPoint), 1);
          }
    
          const colorFraction = Math.min(scrollFraction * 3, 1);
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
          trackrRef.current.classList.add('sticky-bottom');
          trackrRef.current.classList.remove('sticky');
        } else if (cacheRect.top <= 0) {
          trackrRef.current.classList.add('sticky');
          trackrRef.current.classList.remove('sticky-bottom');
        } else {
          trackrRef.current.classList.remove('sticky', 'sticky-bottom');
        }
  
        if (cache2Rect.bottom <= window.innerHeight) {
          trackrRef2.current.classList.add('sticky-bottom');
          trackrRef2.current.classList.remove('sticky');
        } else if (cache2Rect.top <= 0) {
          trackrRef2.current.classList.add('sticky');
          trackrRef2.current.classList.remove('sticky-bottom');
        } else {
          trackrRef2.current.classList.remove('sticky', 'sticky-bottom');
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    

  // for sending emails
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault(); 
  
      const formData = {
        name,
        email,
        message,
      };
  
      try {
        const response = await fetch('./sendemail.php', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          console.log('Email sent successfully');
          setEmailSent(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    if (emailSent) {
      setIsSent("Thank you for your message, I will get back to you shortly.");
    }

    return (
        <div className="body">
            {/* Intro */}
            <div className="introcontainer">
                <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{padding: 40, maxWidth: 700, zIndex:1}}>
                        Hello, <br/><br/>
            
                        I am <span style={{fontWeight: 700, color: 'var(--text-color)', textShadow: 'var(--text-shadow)'}}>Elodie Szablewski</span>, I have been programming and creating products for 13 years.<br/><br/>
            
                        Lifelong artist with a background in mechanical engineering and business, I bring a unique 
                        edge to <span style={{fontWeight: 700, color: 'var(--text-color2)', textShadow: 'var(--text-shadow2)'}}>product design and development</span> projects.
                    </h1>
                    <img ref={imageRef} src="./img/icons/react-light.png" alt="react" style={{ width: imageWidth, maxWidth:600, borderRadius: 150, position: 'absolute', left: '5%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                </div>
                <div style={{height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', paddingLeft: 40, paddingRight:40, maxWidth: 700, zIndex: 1, lineHeight: 2 }}>
                    <h2 ref={(el) => (elementsRef.current[0] = el)} className="slide-in" style={{fontWeight: 400}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> comprehensive coding skills
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[1] = el)} className="slide-in" style={{fontWeight: 400}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> a deep understanding of UX design principles 
                    </h2>
                    <h2 ref={(el) => (elementsRef.current[2] = el)} className="slide-in" style={{fontWeight: 400}}>
                        <span style={{color:'rgb(215, 215, 255)', paddingLeft:40}}>&#8226;</span> a relentless creativity for UI and design<br/> 
                    </h2>
                    <div style={{width: '100%',display:'flex', flexDirection: 'row', justifyContent:'center',alignItems:'center', marginTop:100}}>
                      <img ref={(el) => (elementsRef.current[3] = el)} src="./img/icons/js.png" alt="react" style={{ margin:10, width: '10%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[4] = el)} src="./img/icons/html.png" alt="react" style={{ margin:10, width: '10%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[5] = el)} src="./img/icons/css.png" alt="react" style={{ margin:10, width: '10%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                    </div>
                    <div style={{width: '100%',display:'flex', flexDirection: 'row', justifyContent:'center',alignItems:'center',marginTop:40}}>
                      <img ref={(el) => (elementsRef.current[6] = el)} src="./img/icons/figma.png" alt="react" style={{ margin:10, width: '10%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[7] = el)} src="./img/icons/protopie.png" alt="react" style={{ margin:10, width: '10%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                      <img ref={(el) => (elementsRef.current[8] = el)} src="./img/icons/aws.png" alt="react" style={{ margin:10, width: '10%', maxWidth: 100, objectFit:'contain', height: 'auto'}}/>
                    </div>
                </div>
            </div>
            <div id="trackr" ref={cacheRef}  className="cache-container" style={{height: '200vh'}}>
              <div ref={trackrRef}>
                <Trackr />
              </div>
            </div>
            <div ref={cacheRef2}  className="cache-container" style={{height: '200vh'}}>
              <div ref={trackrRef2} style={{}}>
                <FleetManager />
              </div>
            </div>
            <br/><br/><br/>
            <div style={{width:'100%', justifyContent:'center', display:'flex'}}>
              <h1>Other projects</h1>
            </div>
            <ProjectsCarousel/>
            <div className="contact-back">
              <div className="contact-section">
                <h2>Contact Me</h2>
                <p>{isSent}</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                  <p>Email: elodie.sza@gmail.com</p>
                </div>
              </div>
            </div>
            <MenuBar />
            <ScrollUp color="white" />
        </div>
    );
}

export default Portfolio;
