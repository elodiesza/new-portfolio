function ImageContour({color, background, img}) {
    

    return (
        <div style={{display: 'flex', flex:1, justifyContent:'center', alignItems: 'center'}}>
            <div style={{background: `linear-gradient(-45deg, ${color},${background} 10%,${background} 90%,${color} 100%)`, padding:2,
            borderRadius: '5vw', width: '80%', display: 'flex', flex:1, marginTop: 30, marginBottom: 30}}>
                <div style={{backgroundColor: '#F0F7F6',borderRadius: '5vw', flex:1, display: 'flex', padding: 20}}>
                    <img src={`./img/pics/${img}.png`} alt="competition" style={{borderRadius: '5vw', 
                    width: '100%',objectFit: 'contain',boxShadow: '0 2px 6px rgb(0,0,0,0.5)'}}/>
                </div>
            </div>
        </div>
    );
};

export default ImageContour;