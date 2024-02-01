import '../styles.css';

function Persona({type,img, name, location, age, occupation, bio, painpoints, color}) {
    
    return (
        <div style={{ width: '100%',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <div className="circle-container">
                <p style={{fontSize: '2em', fontWeight:500}}>{type}</p><br/>
                <div class="profile">
                    <div className="circle">
                        <img src={img} alt="persona1" style={{display:'flex',width: '100%',objectFit: 'contain'}}/>
                    </div>
                    <div style={{margin: '0 10px'}}>
                        <br/>
                        <p>
                            <span class="cat" style={{color: color}}>Name : </span> {name}
                        </p>
                        <p>
                            <span class="cat" style={{color: color}}>Location : </span> {location}
                        </p>
                        <p>
                            <span class="cat" style={{color: color}}>Age : </span> {age}
                        </p>
                        <p>
                            <span class="cat" style={{color: color}}>Occupation : </span> {occupation}
                        </p>
                        <br/>
                    </div>
                </div>
            </div>        
            <div className="text-container">
                <p class="cat" style={{color: color}}>Bio : </p> 
                <p>
                    {bio}
                </p><br/>
                <p class="cat" style={{color: color}}>Pain points : </p> 
                <p>
                    {painpoints}
                </p>
            </div>
        </div>
    );
};

export default Persona;