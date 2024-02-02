import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import TitleElement from '../components/TitleElement';
import SectionButton from '../components/SectionButton';
import ScrollUp from '../components/ScrollUp';
import ImageContour from '../components/ImageContour';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Persona from '../components/Persona';
import GoBack from '../components/GoBack';
import MenuBar from '../components/MenuBar';

function Trackr() {

    const tags = ["Challenges", "Competitive analysis", "User research", "Pain points", "User flow", "Wireframes", "Prototyping","Final Design"];

    return(
        <div style={{overflowX:'hidden', flexDirection: 'column', width: '100vw',
        display: 'flex', alignItems: 'center',justifyContent:'flex-start'}}>
            <div style={{width: '100%', zIndex: 2, maxWidth: 1000}}>
                <div style={{backgroundColor: 'white', weight:'100%', height: '20vh'}}>
                    <TitleElement text="Trackr" img="trackr-icon"/>
                </div>
                <div class="content" style={{backgroundColor: '#F0F7F6'}}>
                    <h2 class="sectionTitle">DESCRIPTION</h2>
                    <p>In a world defined by data and constant demands, the need for a tool that enables individuals to 
                        harness their uniqueness and enhance their lives has never been more critical. Enter Trackr, a 
                        groundbreaking life tracker app designed to empower you to seize control of your time, habits, 
                        and overall well-being, paving the way for a more productive, fulfilling life.</p>
                    <h2 class="sectionTitle">STEPS</h2>
                    <div style={{display: 'flex',flexDirection:'row', flexWrap: 'wrap', width:'100%'}}>
                        {tags.map((text, index) => (
                            <SectionButton key={index} text={text} color={'#D4ECE9'} textcolor={'#0C6863'} />
                        ))}
                    </div>
                    <h2 class="sectionTitle">PROJECT ORIGIN</h2>
                    <p>
                    I have been recording my habits consistently since 2018, first in a notebook, following the bullet 
                    journal trend. I realized the power of tracking and the impact it had on my life in 2020 when I moved 
                    to Korea with a light luggage, leaving it behind. Upon arrival during my quarantine, I decided that it 
                    is time to improve my tracking system, learning Swift with the goal of creating a convenient mobile app. 
                    As a novice, I went through up and downs, but finally came up with a functional version in 2022, and 
                    deployed for personal use in 2023. Using it on a daily basis, I am self-testing the functions and 
                    optimizing every aspect of it, including UX design that became a new interest of mine.
                    </p>
                    <h2 class="sectionTitle">CHALLENGES</h2>
                    <ul>
                        <li>
                            Too complicated interactions for massive data collection
                        </li>
                        <li>
                            User can’t see the immediate value of collecting this data
                        </li>
                        <li>
                            Users can’t get insights from the data collected everyday
                        </li>
                    </ul>
                    <h2 class="sectionTitle">COMPETITIVE ANALYSIS</h2>
                    <p>
                    Downloading and testing similar apps on the market and draw useful insights.
                    </p>
                    <ImageContour color="#0C6863" background="#F0F7F6" img="trackr-competition"/>
                    <ul>
                        <li>
                            Spot good and bad points of each app through thorough use.
                        </li>
                        <li>
                            Note each app’s specific approach
                        </li>
                        <li>
                            Green prominent color
                        </li>
                    </ul>
                    <h2 class="sectionTitle">USER RESEARCH</h2>
                    <h3 style={{color: '#0C6863'}}>Qualitative analysis</h3>
                    <p>
                    Check reviews in competitor’s review section. </p><br/><br/>
                    <div style={{display: 'flex', flexDirection: 'row',flexWrap:'wrap', justifyContent:'center'}}>
                        <div style={{margin:10,display: 'flex', flexDirection: 'row', justifyContent:'center', marginBottom: 10}}>
                            <p style={{color: 'white', backgroundColor: '#0C6863', padding: 20, borderRadius: 10, maxWidth:220}}>
                            “I see no way to run experiments. It would be great to be able to automatically 
                    integrate data from Apple Health, showing things like HRV and sleep quality that 
                    would have an obvious bearing on mood and energy.”</p>
                        </div>
                        <div style={{margin:10,display: 'flex', flexDirection: 'row', justifyContent:'center', marginBottom: 10}}>
                            <p style={{color: 'white', backgroundColor: '#0C6863', padding: 20, borderRadius: 10, maxWidth:220}}>
                                "Amazing app, but bad design choice, not lifting me up with cuteness and colors not passing for me, it is not pleasure to log unfortunatelly, its annoying. If the app had better design and more harmonic color palete it would be awesome"
                            </p>
                        </div>
                        <div style={{margin:10,display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                            <p style={{color: 'white', backgroundColor: '#0C6863', padding: 20, borderRadius: 10, maxWidth:220}}>
                                “This is an annoying, interruptive, absolutely driving me crazy - pop up covers the screen, stops processes in the middle, even interrupts the keyboard while I am typing. Great idea, BAD implementation.”</p>
                        </div>
                        <div style={{margin:10,display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                            <p style={{color: 'white', backgroundColor: '#0C6863', padding: 20, borderRadius: 10, maxWidth:220}}>
                                “I think it's really good at what it should, but my concern was about all my data that didn't save automatically. As I now just found out that you have to save it yourself which sucks.... cause I had a lot of personal feelings in this app.”</p>
                        </div>
                        <div style={{margin:10,display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                            <p style={{color: 'white', backgroundColor: '#0C6863', padding: 20, borderRadius: 10, maxWidth:220}}>
                                “The app focuses way too much on moods. For example , I just can barely see a full statistics of all the activities I do but I can see every detail for every mood. I dislike the prioritization of mood tracking when that's a statistic I don't even need an app for.”</p>
                        </div>
                    </div><br/><br/>
                    <p>
                    
                    </p>
                    <h3 style={{color: '#0C6863'}}>Quantitative analysis</h3>
                    <p>
                    Collecting data through surveys and interviews.
                    </p>
                    <img src="./img/pics/trackr-surveys.png" alt="survey" style={{width: '100%', marginBottom: 50}}/>
                    <h3 style={{color: '#0C6863'}}>User Personas</h3>
                    <div style={{margin: '0 -20px'}}>
                        <Flicking
                        circular={true}
                        className="flicking flicking0"
                        gap={10}
                        >
                            <div className="card">
                                <Persona 
                                    type="Procrastination navigator"
                                    img="./img/personas/mita.png" 
                                    name="Sasha" 
                                    location="Bangkok" 
                                    age="24" occupation="Graduate Student" 
                                    bio="Sasha struggles with procrastination and is always looking for external motivation to help her stay on track with her studies and personal projects." 
                                    painpoints="Needs reminders and incentives to motivate her to start and complete tasks." 
                                    color="#0C6863"/>
                            </div>
                            <div className="card">
                                <Persona 
                                    type="The Minimalist Achiever"
                                    img="./img/personas/alex.png" 
                                    name="Alex" 
                                    location="Austin, TX" 
                                    age="29" occupation="Freelance Graphic Designer" 
                                    bio="Alex believes in simplicity and efficiency. He prefers a minimalist lifestyle and seeks tools that offer maximum output with minimal input." 
                                    painpoints="Overwhelmed by complex apps, needs a straightforward and uncluttered habit tracking solution." 
                                    color="#0C6863"/>
                            </div>
                            <div className="card">
                                <Persona 
                                    type="The Efficiency Expert"
                                    img="./img/personas/brandi.png" 
                                    name="Sarah" 
                                    location="London" 
                                    age="35" occupation="Operations Manager" 
                                    bio="Sarah is constantly seeking ways to optimize her daily routine and work processes for maximum productivity. She loves tools that help her streamline tasks." 
                                    painpoints="Difficulty in balancing multiple tasks, needs a solution to quickly track and optimize daily habits." 
                                    color="#0C6863"/>
                            </div>
                            <div className="card">
                                <Persona 
                                    type="The Wellness Pioneer"
                                    img="./img/personas/david.png" 
                                    name="David" 
                                    location="Boulder, CO" 
                                    age="40" occupation="Yoga Instructor and Nutritionist" 
                                    bio="David is focused on improving his and others' health and lifestyle. He's always on the lookout for new ways to incorporate wellness into daily life." 
                                    painpoints="Needs a habit tracker that can integrate health and wellness routines effectively." 
                                    color="#0C6863"/>
                            </div>
                            <div className="card">
                                <Persona 
                                    type="The Slow Adaptor"
                                    img="./img/personas/margaret.png" 
                                    name="Margaret " 
                                    location="Phoenix, AZ" 
                                    age="65" occupation="Retired Teacher" 
                                    bio="Margaret is cautious about using new technology and values her privacy. She's motivated to try new apps when recommended by friends or family and when they align with her health goals." 
                                    painpoints="Intimidated by complex interfaces, needs an easy-to-understand and secure habit tracker." 
                                    color="#0C6863"/>
                            </div>
                            <div className="card">
                                <Persona 
                                    type="The Journaling Craze"
                                    img="./img/personas/asma.png" 
                                    name=" Olivia" 
                                    location="Seoul" 
                                    age="31" occupation="Journalist" 
                                    bio="Olivia loves journaling and prefers customizable tools that have an old-fashioned, personal feel. She enjoys tracking her habits in a way that feels intimate and unique." 
                                    painpoints="Looking for a habit tracker that offers customization and a personal touch, similar to traditional agendas." 
                                    color="#0C6863"/>
                            </div>
                        </Flicking>
                    </div>
                    <h2 class="sectionTitle">USER FLOW</h2>
                    <h3>High-level flow</h3>
                    <div class="row-to-column">
                        <div>
                            <ul>
                                <li>
                                    Indentify key screens and patterns.
                                </li>
                                <li>
                                    Outline necessary functionalities.
                                </li>
                                <li>
                                    Draw main UX design concerns.
                                </li>
                                <li>
                                    Create a guideline for first wireframes and prototypes.
                                </li>
                            </ul>
                        </div>
                        <img src="./img/pics/trackr-userflow0.png" alt="userflow" style={{width: '50%', marginBottom: 50}}/>
                    </div>
                    <h3>Detailed flow</h3>
                    <div class="row-to-column">
                        <img src="./img/pics/trackr-userflow.png" alt="userflow" style={{width: '50%', marginBottom: 50}}/>
                        <div>
                            <ul>
                                <li>
                                    Indicate the links between front-end/ back-end and user interactions.
                                </li>
                                <li>
                                    Notice repetitive patterns and re-arrange logic for simpler interactions.
                                </li>
                                <li>
                                    Change order and timing of tasks to optimize loading time.
                                </li>
                                <li>
                                    Figure out key database structure to avoid redundancy and support a scalable system.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 class="sectionTitle">WIREFRAMES</h2>
                    <img src="./img/pics/trackr-wireframes.png" alt="wireframes" style={{width: '100%', marginBottom: 50}}/>
                    <h2 class="sectionTitle">PROTOTYPING</h2>
                    <div class="row-to-column">
                    <div style={{display: 'flex', width: '100%', justifyContent:'center', alignItems: 'center'}}>
                        <img src="./img/pics/trackr-prototype.gif" alt="prototype" style={{width: '50%', marginBottom: 50, borderRadius: '6vw'}}/>
                    </div>
                    <video width="400" height="240" controls>
                        <source src={'./img/pics/tracker.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    
                    <h2 class="sectionTitle">FINAL DESIGN</h2>
                    <div class="row-to-column">
                        <img src="./img/pics/trackr-icon.png" alt="trackr-final" style={{width: 100, marginBottom: 20, borderRadius: 20}}/>
                        <ul>
                            <li>
                            The app requires a lot of different colors for data differenciation and requires to visualize a lot of data 
                            all at once, so it is necessary to keep a very simple and clean design, at least for the onboarding period.
                            </li>
                            <li>
                                To keep a sense of familiarity and comfort, I chose to reproduce iOS design codes that comply with required refined look. 
                            </li>
                            <li>
                                The logo of the app follows the a similar design to the one of Listr, its sister app. The "T" standing for Trackr is represented 
                                in the form of a progress bar to remind features of the app.
                            </li>
                        </ul>
                    </div>
                    <div class="card-wrapper">
                        <Flicking
                        circular={true}
                        className="flicking flicking0"
                        gap={10}
                        >
                            <div className="phonecard">
                                <img src="./img/pics/trackr-screen1.png" alt="trackr-1" style={{width: '100%', marginBottom: 50, borderRadius: '6vw'}}/>
                            </div>
                            <div className="phonecard">
                                <img src="./img/pics/trackr-screen2.png" alt="trackr-2" style={{width: '100%', marginBottom: 50, borderRadius: '6vw'}}/>
                            </div>
                            <div className="phonecard">
                                <img src="./img/pics/trackr-screen3.png" alt="trackr-3" style={{width: '100%', marginBottom: 50, borderRadius: '6vw'}}/>
                            </div>
                            <div className="phonecard">
                                <img src="./img/pics/trackr-screen4.png" alt="trackr-4" style={{width: '100%', marginBottom: 50, borderRadius: '6vw'}}/>
                            </div>
                        </Flicking>
                    </div>
                    <img src="./img/pics/trackr-colors.png" alt="trackr-final" style={{width: '100%', marginBottom: 50, borderRadius: '6vw'}}/>
                    <h3 style={{color: '#0C6863'}}>Competitive edge</h3>
                    <ul>
                        <li>
                        Multiple ways of recording a track - versatile (boolean, number, state)
                        </li>
                        <li>
                        Powerful insight provider
                        </li>
                        <li>
                        My daily record doesn’t require to create a new record, it is already the main page
                        </li>
                        <li>
                        Hyper-customizability so they can associate their indicator better and express uniqueness
                        </li>
                        <li>
                        Integrated onboarding without tutorial
                        </li>
                    </ul>
                </div>
            </div>
            <MenuBar />
            <ScrollUp color="white" />
            <GoBack color="white" />
        </div>
    )
}
export default Trackr;