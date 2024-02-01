import lightenColor from "../functions/lightenColor";
import darkenColor from "../functions/darkenColor";

function SectionButton({text, color, textcolor}) {
    return (
        <div style={{marginRight: 15, marginTop:15, display: 'inline-flex', height: 30, borderRadius: 15, 
        background: `linear-gradient(to top, ${darkenColor(color,20)}, ${color} 30%, ${lightenColor(color,5)} 80%, ${color} 100%)`, 
        justifyContent:'center', alignItems:'center',padding: '0 15px', boxShadow: '0 2px 4px rgb(0,0,0,0.5)'}}>
            <p style={{color: textcolor, fontSize: 15, margin: 0}}>{text}</p>
        </div>
    );
};

export default SectionButton;