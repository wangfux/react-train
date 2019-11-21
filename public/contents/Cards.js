import React from 'react';
import List from './List';
import axios from 'axios';
class Cards extends React.Component{
    constructor(props){
    super(props)
    this.state={repos:[]}
}
async componentDidMount(){
    const res=await axios.get("https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories");
    console.log('res',res.data)
    this.setState({
        repos:res.data.items
    });
}

async componentDidUpdate(){
    const res = await axios.get(this.props.API);
    console.log('UpdateAPI',this.props.API);
    if(this.props.API!=this.state.API){
        this.setState({
            repos:res.data.items
        });
        console.log('UpdateRes',res.data);
    }
};
render(){
    const {data}=this.props;
    const style={
        box:{width:'23%', margin: '10px 5px', boxSizing: 'border-box'},
        div:{background:'gray',width:'300px',height:'420px',listStyle:'none'},
        div2:{ width:'90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'center' },
        modeul:{ display: 'flex',flexWrap: 'wrap', listStyle: 'none', justifyContent: 'space-around'},
        img:{display:'flex',width:'250px',height:'200px',margin:'auto'},
        li:{width:'250px',margin:'auto'}
    }
    const list=this.state.repos.map((item,key) => <div key={item.id} style={style.box}>
    <div style={style.div}>
    
           <h1 style={{textAlign:'center'}}>#{key+1}</h1>
        <div>
           <img src={item.owner.avatar_url} style={style.img}/>
           <a href={item.html_url}></a>
           <li style={style.li}>
            <svg t="1573717213891" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="32" height="32"><path d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z" p-id="1454" fill="#d81e06"></path></svg>
           <a href={item.owner.html_url}>{item.name}</a>
           </li>

           <li style={style.li}>
            <svg t="1573717548417" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1360" width="32" height="32"><path d="M942.1 464.8c37.5-38.7 14.3-103.6-39.2-109.8l-197.5-22.9c-21.3-2.5-39.9-15.2-49.9-34.1l-93.1-175.7c-25.2-47.6-94.1-45.6-116.5 3.3l-82.8 180.7c-8.9 19.4-26.8 33.3-47.9 36.9l-195.8 34.2c-53.1 9.3-72.5 75.4-32.8 111.9L232.8 624a65.16 65.16 0 0 1 20.3 57l-28 196.8c-7.6 53.3 49.3 92.2 96.2 65.8l173.2-97.5c18.6-10.5 41.3-11.1 60.5-1.7l178.6 87.4c48.4 23.7 102.9-18.4 92.3-71.2l-39.2-194.9c-4.2-21 2.1-42.7 17-58l138.4-142.9z" fill="#f4ea2a" p-id="1361"></path></svg>
           <a>{item.watchers} stars</a>
           </li>

           <li style={style.li}>
            <svg t="1573718044182" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36235" width="32" height="32"><path d="M768 438.857143a217.307429 217.307429 0 0 1-140.8-52.443429l-241.371429 160.914286a180.955429 180.955429 0 0 1 15.652572 69.046857l347.209143 148.772572A144.749714 144.749714 0 0 1 841.142857 731.428571a146.285714 146.285714 0 1 1-146.285714 146.285715 147.748571 147.748571 0 0 1 2.340571-23.625143l-340.041143-113.371429a182.857143 182.857143 0 1 1-44.836571-275.748571l240.932571-200.704A215.844571 215.844571 0 0 1 548.571429 219.428571a219.428571 219.428571 0 1 1 219.428571 219.428572z" fill="#0078D7" p-id="36236"></path></svg>
           <a>{item.forks} forks</a>
           </li>

           <li style={style.li}>
            <svg t="1573717890541" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29758" width="32" height="32"><path d="M999.328 876.787l-415.774-786.738c-9.992-16.896-28.118-28.048-48.849-28.048s-38.858 11.153-48.706 27.787l-415.917 787c-4.897 8.2-7.793 18.087-7.793 28.65 0 31.138 25.161 56.398 56.258 56.562h831.563c0.133 0.001 0.29 0.002 0.447 0.002 31.239 0 56.563-25.324 56.563-56.563 0-10.563-2.895-20.45-7.937-28.91zM534.337 282.508c40.402 0 94.761 47.748 80.804 146.917l-38.932 197.603c-1.141 22.269-18.928 40.035-41.103 41.137-22.303-1.14-40.070-18.928-41.169-41.102l-44.81-204.248c-2.527-8.918-3.98-19.16-3.98-29.74 0-53.998 37.834-99.16 88.438-110.424zM534.337 920.861c-56.797 0-102.842-46.044-102.842-102.842s46.044-102.842 102.842-102.842c56.797 0 102.842 46.044 102.842 102.842-2.033 55.195-47.27 99.169-102.775 99.169-0.023 0-0.046 0-0.069 0z" fill="#d4237a" p-id="29759"></path></svg>
           <a>{item.open_issues} open issues</a>
           </li>
           </div>
    </div>
        </div>);

    return<div style={style.div2}>
    <ul style={style.modeul}>
    {list}
    </ul>
    </div>
    }
}
export default Cards;