
function TitleElement({text, img, color}) {
    
    return (
        <div style={{flex:1, display: 'flex', flexDirection: 'row', alignItems:'flex-end', height: '20vh', paddingLeft:40}}>
            <img src={`./img/pics/${img}.png`} alt="trackr" style={{width: 100, objectFit: 'contain', borderRadius: 20, 
            boxShadow: 'inset 2px 2px 6px rgba(255, 255, 255, 1), -2px 2px 10px rgba(0, 0, 0, 0.25)', marginRight: 10}}/>
            <h1 style={{color: color, paddingBottom: 20}}>{text}</h1>
        </div>
    );
};

export default TitleElement;