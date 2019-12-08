import React from 'react';
class Footer extends React.Component{
    render(){
        const style={
            p:{display:'flex',justifyContent: 'center',fontSize:'18px',width:'1200px',margin:'0 auto'}
        };
        return<div style={style.p}>版权所有@LIUWENCAN</div>
    }
}
export default Footer;