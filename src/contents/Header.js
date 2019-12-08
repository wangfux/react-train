import React from 'react';
import App from './App';
import Battle from './Battle';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        const style={
            totaldiv:{width:'1200px',margin:'0 auto',play:'flex',justifyContent:'flaxStart',},
            div:{display:'flex',margin:'auto'},
            pul:{display:'flex',listStyle: 'none',flexDirection:'row',justifyContent:'space-between',marginleft:'10px'},
            pli:{color:'red',cursor:'pointer', border: 'none',margin:'10px',background: 'transparent',fontSize:'20px'},
            bli:{cursor:'pointer',margin:'10px',border: 'none',background: 'transparent',fontSize:'20px'},
            a:{textDecoration:'none'}
        }
        return(
            <div style={style.totaldiv}>
            <div style={style.div}>
            <ul style={style.pul}>
            <button style={style.pli}><NavLink to='/' style={style.a} >Popular</NavLink></button>
            <button style={style.bli}><NavLink to='/battle/' style={style.a} onClick={()=>this.props.handleChange(false)}>Battle</NavLink></button>
            </ul>
            </div>
            </div>

        )
    }
}
export default Header;