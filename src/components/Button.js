import lightenColor from '../functions/lightenColor';
import darkenColor from '../functions/darkenColor';
import { Link } from 'react-router-dom';

function Button({text, color, textcolor, path}) {

    return (
        <Link to={path}>
            <div style={{marginRight: 8, marginTop:8, display: 'inline-flex', height: 50, borderRadius: 15, 
            background: `linear-gradient(to top, ${darkenColor(color,10)}, ${color} 15%, ${lightenColor(color,10)} 80%, ${color} 100%)`, 
            justifyContent:'center', alignItems:'center',padding: '0 15px', boxShadow: '0 2px 4px rgb(0,0,0,0.5)'}}>
                <p style={{color: textcolor, fontSize: 15, margin: 20, textShadow: '-1px 1px 2px rgb(0,0,0,0.3)'}}>{text}</p>
            </div>
        </Link>
    );
};

export default Button;