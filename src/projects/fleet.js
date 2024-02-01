import React from 'react';
import '../styles.css';
import SectionButton from '../components/SectionButton';
import ScrollUp from '../components/ScrollUp';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Persona from '../components/Persona';
import GoBack from '../components/GoBack';
import MenuBar from '../components/MenuBar';

function Fleet() {

    const tags = ["Objectives", "Benchmark", "Surveys", "User personas", "Problem definition", "Wireframing", "Final Design"];

    return(
        <div style={{backgroundColor: '#323232',overflowX:'hidden', flexDirection: 'column', width: '100vw',
        display: 'flex', alignItems: 'center',justifyContent:'flex-start'}}>
            <div class="fleet-content">
                <div style={{display:'flex', flexDirection: 'row'}}>
                    <img src="./img/pics/A-Symbol.png" alt="cover" style={{width: 50, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    <div style={{display: 'flex', flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                    borderLeftStyle: 'solid', paddingLeft: 20}}>
                        <p style={{color: '#ffffff'}}>Industrial software design</p>
                        <h1 style={{color: '#FFD645', fontWeight: 600}}>Autonomous Fleet Manager</h1>
                    </div>
                </div>
                <div style={{display: 'flex', marginTop: 70, flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                borderLeftStyle: 'solid', paddingLeft: 20, marginBottom: 20}}>
                    <h2 class="fleetSectionTitle" style={{margin:0}}>Introduction</h2>
                </div>
                <p> In this UX case study, I will explore and propose a user interface for a yet-to-be-released software 
                    product by a company specializing in autonomous driving solutions, specifically tailored for last-mile 
                    logistics in car manufacturing settings. The envisioned software serves as a fleet manager, functioning 
                    as a control tower to oversee the autonomous navigation of vehicles from the end of the assembly line. 
                    My focus will be on designing a UX/UI that, upon the product's release, could potentially enhance user 
                    interaction and streamline the autonomous fleet management system, following industry standards.</p>
                <div style={{display: 'flex', marginTop: 70, flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                borderLeftStyle: 'solid', paddingLeft: 20, marginBottom: 20}}>
                    <h2 class="fleetSectionTitle" style={{margin:0}}>Steps</h2>
                </div>
                <div style={{display: 'flex',flexDirection:'row', flexWrap: 'wrap', width:'100%'}}>
                    {tags.map((text, index) => (
                        <SectionButton key={index} text={text} color={'#878787'} textcolor={'black'}/>
                    ))}
                </div>
                <div style={{display: 'flex', marginTop: 70, flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                borderLeftStyle: 'solid', paddingLeft: 20, marginBottom: 20}}>
                    <h2 class="fleetSectionTitle" style={{margin:0}}>Goals & Objectives</h2>
                </div>
                <p>3 Stakeholders will drive design decisions :</p><br/>
                <div class='row-to-column'>
                <ul>
                    <li>
                        <span style={{fontWeight: 700, color: 'white'}}>OEMs</span> :
                        Address common pain points in car OEM operations, such as logistics and production planning, while emphasizing key metrics.
                        Ensure the product adheres to industry standards, including ISO 26262 and ANSI.
                    </li><br/><br/>
                    <li>
                        <span style={{fontWeight: 700, color: 'white'}}>End User</span> :
                        Design a user-friendly interface for an audience unfamiliar with the product and its functions, 
                        catering to pure car factory workers who are more operations-oriented and may not be well-versed in computing.
                    </li><br/><br/>
                    <li>
                        <span style={{fontWeight: 700, color: 'white'}}>Company</span> :
                        Refresh the current standard software design staying in line with the company's branding and image.
                    </li>
                </ul>
                <img src="./img/pics/fleet-old1.png" alt="goals" style={{flex:1, width: '50%',margin: 20, objectFit: 'contain', height: 'auto'}}/>                
                </div>
                <div style={{display: 'flex', marginTop: 70, flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                borderLeftStyle: 'solid', paddingLeft: 20, marginBottom: 20}}>
                    <h2 class="fleetSectionTitle" style={{margin:0}}>Research</h2>
                </div>
                <p class="quote">
                Flexibility and efficiency are crucial in automotive manufacturing, and production lines are often designed 
                to optimize workflow and accommodate variations in the manufacturing process in a just-in-time delivery model.
                </p>
                <p>
                Ensuring real-time visibility into the production process for timely decision-making remains a challenge.
                </p><br/><br/><br/>
                <h3 style={{color: '#C29C16'}}>Benchmark</h3>
                <p>
                    Automotive OEMs (Original Equipment Manufacturers) often use Manufacturing Execution Systems (MES) to track 
                    the production of cars. MES software provides real-time monitoring of the manufacturing process, including 
                    details about each car's production status, location on the assembly line, and readiness for dispatch. 
                    Additionally, Enterprise Resource Planning (ERP) systems may be integrated to manage broader aspects of 
                    production, such as inventory, supply chain, and order fulfillment.
                </p><br/>
                <p style={{color: 'white', backgroundColor: '#484848', padding: 20, borderRadius: 10}}>
                    <span style={{color:'#FFD645', fontWeight: 600}}> &#x3e; </span> ERPs and MESs can monitor and plan “theoretical” 
                    operations, but can’t check what is actually happening on-site.
                </p><br/>
                <p>
                Most of today’s fleet managers available on the market are aimed at car rental services. None of them is specialized 
                in factory production, and the autonomy aspect gives it a brand new edge.
                </p><br/>
                <div style={{display: 'flex', flexDirection:'row', justifyContent:'center'}}>
                    <img src="./img/icons/samsara.png" alt="goals" style={{width: 80, margin: 10, objectFit: 'contain', height: 'auto'}}/>
                    <img src="./img/icons/fleetio.png" alt="goals" style={{width: 80, margin: 10, objectFit: 'contain', height: 'auto'}}/>
                    <img src="./img/icons/fleethub.png" alt="goals" style={{width: 80, margin: 10, objectFit: 'contain', height: 'auto'}}/>
                    <img src="./img/icons/fleetcloud.png" alt="goals" style={{width: 80, margin: 10, objectFit: 'contain', height: 'auto'}}/>
                </div>
                <h3 style={{color: '#C29C16'}}>Surveys</h3>
                <p>What people say of existings services : </p><br/>
                <div style={{display: 'flex', flexDirection: 'row',flexWrap:'wrap', justifyContent:'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', marginBottom: 10}}>
                        <img src="./img/pics/persona1.png" alt="goals" style={{width: 40, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        <p style={{color: 'white', backgroundColor: '#484848', padding: 20, borderRadius: 10, maxWidth:220}}>“The software can seem 
                        a little overwhelming at first, so you'll have to take the time to focus on training.”</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', marginBottom: 10}}>
                        <img src="./img/pics/persona2.png" alt="goals" style={{width: 40, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        <p style={{color: 'white', backgroundColor: '#484848', padding: 20, borderRadius: 10, maxWidth:220}}>
                            "The text on the screen is too small. But maybe I don't know how to set it up myself."
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                        <img src="./img/pics/persona3.png" alt="goals" style={{width: 40, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        <p style={{color: 'white', backgroundColor: '#484848', padding: 20, borderRadius: 10, maxWidth:220}}>
                            “I'd like more detailed permissions for users.”</p>
                    </div>
                </div><br/><br/>
                <h3 style={{color: '#C29C16'}}>User Personas</h3>
                <div style={{margin: '0 -20px'}}>
                    <Flicking
                    circular={true}
                    className="flicking flicking0"
                    gap={10}
                    >
                        <div className="card">
                            <Persona 
                                type="The Factory Operator"
                                img="./img/pics/persona1.png" 
                                name="John Smith" 
                                location="Detroit, Michigan" 
                                age="35" occupation="Factory Worker" 
                                bio="John has extensive experience working with machinery but limited computing skills. He prefers straightforward tasks and values simplicity in his work processes." 
                                painpoints="struggles with complex digital tools; inflexible to change of habits 
                                Persona 2: The Logistics Specialist" 
                                color="#C29C16"/>
                        </div>
                        <div className="card">
                            <Persona 
                                type="The Logistics Specialist"
                                img="./img/pics/persona2.png" 
                                name="Karl Johnson" 
                                location="Stuttgart, Germany" 
                                age="28" occupation="Logistic Coordinator" 
                                bio="Karl is skilled in logistics and understands the importance of detailed, accurate information for process planning and maintenance. He has color vision deficiency, which impacts her interaction with certain visual data." 
                                painpoints="Inconcise, incomplete information make his work difficult ; most interfaces don’t accomodate his color sight impairment;" 
                                color="#C29C16"/>
                        </div>
                        <div className="card">
                            <Persona 
                                type="The Safety-Minded Manager"
                                img="./img/pics/persona3.png" 
                                name="Hirotaka Watanabe" 
                                location="Yokohama, Japan" 
                                age="35" occupation="Operations Manager" 
                                bio="Hirotaka oversees the entire site operations, emphasizing safety and efficiency. He values quick access to safety features and real-time alerts." 
                                painpoints="has a hard time answering the strict automotive industry safety norms. Loses a lot of money on inefficient processes." 
                                color="#C29C16"/>
                        </div>
                    </Flicking>
                </div>
                <h2 class="fleetSectionTitle" style={{textAlign:'center'}}>So ?</h2>
                <h3 style={{color: '#C29C16'}}>Problem definition</h3>
                <p>
                I extracted user pain points and prioritised them.
                </p><br/><br/>
                <ul>
                    <li>
                        <span style={{fontWeight: 700, color: 'white'}}>Efficient Fleet Management</span> :
                        There is a critical need for a smart fleet management system that offers flexibility in monitoring and controlling car statuses to prevent bottlenecks and enhance workflow efficiency. Collect car odometry and relay the information in a visual manner.
                    </li><br/><br/>
                    <li>
                        <span style={{fontWeight: 700, color: 'white'}}>User-Friendly Technology</span> :
                        With the introduction of new, innovative technologies in the automotive industry, there is a lack of trained personnel adept in these advanced systems. A simple and intuitive user interface is essential to facilitate quick learning and adoption among industry workers, ensuring smooth operation and minimal training time.
                    </li><br/><br/>
                    <li>
                        <span style={{fontWeight: 700, color: 'white'}}>Compliance with Safety Standards</span> :
                        The solution must be developed in adherence to established safety norms and regulations, ensuring the security and wellbeing of both the workers and the vehicles throughout the manufacturing and dispatch processes.
                    </li>
                </ul>
                <div style={{display: 'flex', marginTop: 70, flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                borderLeftStyle: 'solid', paddingLeft: 20, marginBottom: 20}}>
                    <h2 class="fleetSectionTitle" style={{margin:0}}>Ideation & Wireframes</h2>
                </div>
                <img src="./img/pics/fleet-wireframes.png" alt="wireframes" style={{width: '100%', margin: 20, objectFit: 'contain', height: 'auto'}}/>
                <div style={{display: 'flex', marginTop: 70, flexDirection: 'column', borderLeftColor: 'white', borderLeftWidth:2, 
                borderLeftStyle: 'solid', paddingLeft: 20, marginBottom: 20}}>
                    <h2 class="fleetSectionTitle" style={{margin:0}}>Final Design</h2>
                </div>
                <p>
                The following summary encapsulates the key criteria and design decisions I employed to achieve an optimal balance between usability, compliance, and efficiency.
                <br/><br/>My design considerations were heavily influenced by the ISA HMI (Human-Machine Interface) guidelines and industry standards, notably ISO26262 (safety).
                </p><br/><br/>
                <ul>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>Clarity and Simplicity :</p>
                    <div class="row-to-column">
                        <div>
                        Separates user modes for job-relevant information, following <span style={{fontWeight: 600, color: 'white'}}>Miller’s law</span> (7±2 chunks of information).<br/>   
                    <br/>Three user modes: Operator (monitoring, issue resolution), Admin (thresholds, security, critical alerts), Developer (maintenance, edge cases).
                        </div>
                    <img src="./img/pics/fleet-usermodes.png" alt="wireframes" style={{width: 200, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    </div>
                    </li><br/><br/>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>Consistency :</p>
                    UI design parallels common ERP systems used in major OEMs.
                    Familiar environment, akin to Excel and SAP, so the worker gets a innate sense of how the software shoulf work. (<span style={{fontWeight: 600, color: 'white'}}>Jakob's law</span>)
                    <div class="row-to-column">
                        <div>
                        <img src="./img/pics/sap.png" alt="sap" style={{width: 300, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        <img src="./img/pics/sap-like.png" alt="sap-like" style={{width: 300, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        </div>
                    </div>
                    Car dashboard-like gauges for automotive industry relevance.
                    <img src="./img/pics/fleet-gauges.png" alt="gauges" style={{width: '80%', margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    </li><br/><br/>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>Safety Considerations :</p>
                    Visuals and sounds for alerts, complying with ANSI/ISA-18.2-2016.
                    <div class="row-to-column">
                        <img src="./img/pics/fleet-error2.png" alt="wireframes" style={{width: 400, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        <img src="./img/pics/fleet-warning.png" alt="wireframes" style={{width: 200, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    </div>
                    </li><br/><br/>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>Error Handling and Feedback (ISO26262) :</p>
                    <div class="row-to-column">
                        <div>
                        Confirmatory steps for critical functions to prevent operational disruption.
                        Clear feedback and misuse-resistant controls.
                        </div>
                    <img src="./img/pics/fleet-message.png" alt="wireframes" style={{width: 200, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    </div>
                    </li><br/><br/>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>High Contrast and Readability :</p>
                    <div class="row-to-column">
                        <div>
                        High-contrast colors, readable fonts.
                        Muted design for normal state minimizes stimuli.
                        Unsaturated/neutral background for clear information display.
                        Gold instead of yellow, reserving red and yellow for abnormal situations.
                        </div>
                    <img src="./img/pics/fleet-colorscheme.png" alt="wireframes" style={{width: 400, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    </div>
                    </li><br/><br/>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>Accessibility :</p>
                    Design aligns with company’s existing tools and branding guidelines.
                    <div class="row-to-column">
                        <img src="./img/pics/fleet-stop1.png" alt="wireframes" style={{width: 300, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                        <img src="./img/pics/fleet-stop2.png" alt="wireframes" style={{width: 300, margin: 20, objectFit: 'contain', height: 'auto'}}/>
                    </div>
                    </li><br/><br/>
                    <li>
                    <p style={{fontSize: 20, color:'#C29C16', fontWeight: 500,marginBottom:10 }}>Branding :</p>
                    Adjustable section sizes with responsive fonts.
Shape differentiation for color vision deficiencies (e.g., STOP button shape).
                    </li><br/><br/>
                </ul>
                <img src="./img/pics/fleet-mac.png" alt="wireframes" style={{width: '100%', margin: 20, objectFit: 'contain', height: 'auto'}}/>
            </div>
            <MenuBar />
            <ScrollUp color="white" />
            <GoBack color="white" />
        </div>
    )
}
export default Fleet;