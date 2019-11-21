import React from 'react';
import App from './App';
import Cards from './Cards';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1
        };

    }
    
    handleChange=(API,num)=>{
        this.setState({Listnum:num})
      this.props.clickList(API);
    };
    
        render(){
            let All="https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
            let JavaScript="https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories";
            let Ruby="https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories";
            let Java="https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories";
            let CSS="https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories";
            let Python="";
            const style={
            div:{display:'flex',justifyContent:'center',fontSize:'18px'},
            ul:{display:'flex',listStyle:'none',fontWeight: 'bold', justifyContent: 'space-between'},
            li:{marginRight: '10px', cursor: 'pointer', border: 'none',background: 'transparent',fontWeight:'bold',fontSize: '30px', outline: 'none',color:'blue'},
            a:{textDecoration:'none'}
            }
            return(
            <div style={style.div}>
                <ul style={style.ul}>
                <button style={style.li}><a href="#" style={style.a} className={this.state.Listnum === 1 ?"active" : null} onClick={this.handleChange.bind(this,All,1)}>All</a></button>
                <button style={style.li}><a href="#" style={style.a} className={this.state.Listnum === 2 ?"active" : null} onClick={this.handleChange.bind(this,JavaScript,2)}>JavaScript</a></button>
                <button style={style.li}><a href="#" style={style.a} className={this.state.Listnum === 3 ?'active' : null} onClick={this.handleChange.bind(this,Ruby,3)}>Ruby</a></button>
                <button style={style.li}><a href="#" style={style.a} className={this.state.Listnum === 4 ?'active' : null} onClick={this.handleChange.bind(this,Java,4)}>Java</a></button>
                <button style={style.li}><a href="#" style={style.a} className={this.state.Listnum === 5 ?'active' : null} onClick={this.handleChange.bind(this,CSS,5)}>CSS</a></button>
                <button style={style.li}><a href="#" style={style.a} className={this.state.Listnum === 6 ?'active' : null} onClick={this.handleChange.bind(this,Python,6)}>Python</a></button>
                </ul>
            </div>
            )
        }
    }
    export default List;
