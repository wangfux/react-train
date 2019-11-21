import React from 'react';
import App from './App';
import BattleContent from './BattleContent';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        const style={
            totaldiv:{width:'1200px'},
            div:{display:'flex',margin:'auto'},
            pul:{display:'flex',listStyle: 'none',fontWeight:'bold',flexDirection:'row',justifyContent:'space-between',marginleft:'10px'},
            pli:{color:'red',cursor:'pointer', border: 'none',margin:'10px',background: 'transparent',fontSize:'30px'},
            bli:{cursor:'pointer',margin:'10px',border: 'none',background: 'transparent',fontSize:'30px'},
            a:{textDecoration:'none'}
        }
        return(
            <div style={style.totaldiv}>
            <div style={style.div}>
            <ul style={style.pul}>
            <button style={style.pli}><a style={style.a} onClick={()=>this.props.handleChange(true)}>Popular</a></button>
            <button style={style.bli}><a style={style.a} onClick={()=>this.props.handleChange(false)}>Battle</a></button>
            </ul>
            </div>
            </div>

        )
    }
}
export default Header;