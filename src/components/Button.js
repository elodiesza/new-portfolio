function Button({text, color}) {
    return (
        <div style={{marginRight: 8, marginTop:8, display: 'inline-flex', height: 50, borderRadius: 15, 
        backgroundColor: color, justifyContent:'center', alignItems:'center',padding: '0 15px'}}>
            <p style={{color: 'white', fontSize: 15, margin: 20, textShadow: '-1px 1px 2px rgb(0,0,0,0.3)'}}>{text}</p>
        </div>
    );
};

export default Button;