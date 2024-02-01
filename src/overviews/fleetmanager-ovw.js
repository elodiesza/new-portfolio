import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import Tag from '../components/Tag';
import Button from '../components/Button';
import TitleElement from '../components/TitleElement';

function FleetManager() {


    const tags = ["UX design", "Industry use case", "Automotive","Product design"];
    const icons = ["react","js","aws","sqlite"];


    return(
        <div class="trackr-section" style={{overflowX:'hidden',maxWidth: '100vw',height:'100vh',
        display: 'flex',justifyContent:'center', alignItems:'flex-start', flexDirection: 'column', 
        backgroundImage: `url("../public/img/pics/polygon.png")`, backgroundColor: '#323232'}}>
            <img src="./img/pics/fleet-mac.png" alt="fleet"/>
            <div style={{overflowX:'hidden', height: '100vh',width: '100vw',
            display: 'flex',justifyContent:'center', alignItems:'flex-start', flex:3, overflow:'hidden'}}>
                <div class="section-container" >
                    <div style={{display: 'flex', flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                    borderLeftStyle: 'solid', paddingLeft: 20}}>
                        <p style={{color: '#ffffff'}}>Industrial software design</p>
                        <h1 style={{color: '#FFD645'}}>Autonomous Fleet Manager</h1>
                    </div>
                    
                    <div class="overview-content">
                        <div></div>
                        <p>Get valuable insights from the data you are recording every day to make your life better.
                        Trackr finds correlations between your own bundles of indicators, because you are unique.</p>
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
                </div>
            </div>
            <div style={{flex:1, bottom: '10vh', display: 'flex', justifyContent:'center', alignItems:'center', width: '100%'}}>
                <Button text="View Project" color="#FFD645" textcolor="#323232" path={"trackr"} />
            </div>
        </div>
    )
}
export default FleetManager;