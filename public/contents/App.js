import "@babel/polyfill";
import React from 'react';

import Header from './Header';
import Cards from './Cards';
import List from './List';
import Footer from './Footer';
import BattleContent from './BattleContent';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
           LtUrl:"https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
           isflag:true
        };
      }  
      clickList=(API)=>{
          this.setState({
                  LtUrl:API
              })
      }
      handleChange(isPopular){
              this.setState({isflag:isPopular})
          }
      render(){
          return(
              <div>
              <div><Header handleChange={this.handleChange.bind(this)}/></div>
            {
                this.state.isflag?<div>
                  <div><List clickList={this.clickList.bind(this)}/></div>
                  <div><Cards API={this.state.LtUrl}/></div>
                  <div><Footer/></div>
                  </div>:<div><BattleContent/></div>
            }
              </div>
          )
      }
  }
  export default App;
