function Tag({text, color}) {
    return (
        <div style={{marginRight: 8, marginTop:8, display: 'inline-flex', height: 30, borderRadius: 15, backgroundColor: color, justifyContent:'center', alignItems:'center',padding: '0 15px'}}>
            <p style={{color: 'white', fontSize: 15, margin: 0, textShadow: '-1px 1px 2px rgb(0,0,0,0.3)'}}>{text}</p>
        </div>
    );
};

export default Tag;