import React from 'react';
import Player from './Player';
import Instructions from './Instructions';
import Header from './Header';

class Battle extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        player:'BATTLE',
        first:[],
        last:[]
    };
}
// 根据状态判断是否进行battle
clickBattle = () => {
    const {player,first,last} = this.state;
    if(player=='BATTLE' && (first.length!=0 && last.length!=0)){
        this.setState({player:'RETURN'});
    }else if(player=='RETURN' && first.length!=0 && last.length!=0){
        this.setState({
            player:'BATTLE',
            first:[],
            last:[]
        });
    }
}
// 子组件player传递数据
transmitDate = (date) => {
    const {first,last} = this.state;
    if(first.length==0 && last.length==0){
        this.setState({first:date});
    }else if(last.length==0 && first.length!=0){
        this.setState({last:date});
    }
}
// 清除state中保存的相关API信息
empty = () => {
    const {first,last} = this.state;
    if(first.length!=0 && last.length==0){
        this.setState({
            first:[]
        });
    }else if(last.length!=0 && first.length!=0 ){
        this.setState({
            last:[]
        });
    }
}

render() {
    const {player,first,last} = this.state;
    const style={
        div1:{display: 'flex',flexDirection: 'row',justifyContent: 'space-around',width:'80%',margin:'0 auto',},
        div2:{textAlign:'center',margin:'100px 0 50px 0'},
        h3:{margin:'0 0 15px 70px',fontWeight:'300'},
        ul: { listStyle: 'none', padding: '0 0 10px 0', width: '250px', margin: '10px', textAlign: 'center', background: 'rgba(0, 0, 0, 0.08)' },
        h4: { margin: '15px', fontSize: '30px', fontWeight: '400' },
        img: { width: '200px', height: '200px', margin: '0 0 10px 0' },
        li1: { lineHeight: '50px',fontWeight:'500',fontSize:'20px'},
        li2: { lineHeight: '50px',fontWeight:'500',fontSize:'25px',color:'#a8071a'},
        li3: { lineHeight: '30px', textAlign: 'left', marginLeft: '30px',fontWeight:'400',fontSize:'20px',textTransform:'capitalize'},
        svg: { verticalAlign: 'middle', marginRight: '5px' },
        button:{background:'#262626',border:'0',padding:'5px 15px 5px 15px',color:'#f5f5f5',fontSize:'30px'},
        
    }

    if(player=='BATTLE' || first.length==0 || last.length==0){
        return (
            <div>
                <Header/>
                <div>
                    <Instructions/>
                </div>
                <div style={style.div1}>
                    <div>
                        <h3 style={style.h3}>Player One</h3>
                        <Player transmitDate={this.transmitDate} empty={this.empty}/>
                    </div>
                    <div>
                        <h3 style={style.h3}>Player Two</h3>
                        <Player transmitDate={this.transmitDate} empty={this.empty}/>
                    </div>
                </div>
                <div style={style.div2}>
                    <button style={style.button} onClick={this.clickBattle}>{player}</button>
                </div>
            </div>
        );
    }else if(player=='RETURN' && (first.score>last.score)){
        return(
            <div>
                <div style={style.div1}>
                    <ul style={style.ul}>
                        <li style={style.li1}><h1>Winner</h1></li>
                        <li style={style.li1}><img style={style.img} src={first.avatar_url}/></li>
                        <li style={style.li1}>score：{first.score}</li>
                        <li style={style.li2}>{first.login}</li>
                        <li style={style.li3}> <svg t="1573717213891" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="32" height="32"><path d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z" p-id="1454" fill="#d81e06"></path></svg>{first.login}</li>
                    </ul>
                    <ul style={style.ul}>
                        <li style={style.li1}><h1>Loser</h1></li>
                        <li style={style.li1}><img style={style.img} src={last.avatar_url}/></li>
                        <li style={style.li1}>score：{last.score}</li>
                        <li style={style.li2}>{last.login}</li>
                        <li style={style.li3}> <svg t="1573717213891" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="32" height="32"><path d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z" p-id="1454" fill="#d81e06"></path></svg>{last.login}</li>
                    </ul>
                </div>
                <div style={style.div2}>
                    <button style={style.button} onClick={this.clickBattle}>{player}</button>
                </div>
            </div>
        )
    }else if(player=='RETURN' &&(first.score<last.score)){
        return(
            <div>
                <div style={style.div1}>
                    <ul style={style.ul}>
                        <li style={style.li1}><h1>Winner</h1></li>
                        <li style={style.li1}><img style={style.img} src={last.avatar_url}/></li>
                        <li style={style.li1}>score：{last.score}</li>
                        <li style={style.li2}>{last.login}</li>
                        <li style={style.li3}> <svg t="1573717213891" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="32" height="32"><path d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z" p-id="1454" fill="#d81e06"></path></svg>{last.login}</li>
                    </ul>
                    <ul style={style.ul}>
                        <li style={style.li1}><h1>Loser</h1></li>
                        <li style={style.li1}><img style={style.img} src={first.avatar_url}/></li>
                        <li style={style.li1}>score：{first.score}</li>
                        <li style={style.li2}>{first.login}</li>
                        <li style={style.li3}> <svg t="1573717213891" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="32" height="32"><path d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z" p-id="1454" fill="#d81e06"></path></svg>{first.login}</li>
                    </ul>
                </div>
                <div style={style.div2}>
                    <button style={style.button} onClick={this.clickBattle}>{player}</button>
                </div>
            </div>
        )
    }
}
}
export default Battle;