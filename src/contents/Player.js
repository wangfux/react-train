import React from 'react';
import axios from 'axios';

class Player extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        click:true,
        username:'',
        login:'',
        html_url:'',
        avatar_url:'',
        score:0
    };
}
// 将表单值保存至状态
usernameChange = event => {
    const username = event.target.value;
    this.setState({username});
}
// 提交表单获取API
usernameSearch = event => {
    const {username} = this.state;
    const {transmitDate} = this.props;
    const url =  'https://api.github.com/search/users?q='+username;
    axios.get(url)
        .then(response => {
            const {login,html_url,avatar_url,score} = response.data.items[0];
            const state = {
                login,
                click:false,
                avatar_url, //头像
                score,  //成绩
                html_url, //个人主页
            };
            this.setState(state);
            transmitDate(state);
        })
    // 阻止事件的默认行为(提交)
    event.preventDefault();
    
}
// 切换显示图标或者表单
onClick = () => {
    this.setState({click:true});
    this.props.empty();
}

render() {
    const style = {
        h1:{marginTop:'50px',textAlign:'center',fontWeight:'300'},
        form: {display: 'flex',justifyContent: 'space-around' ,listStyle: 'none',padding:'0 50px 0 50px',margin: '0 auto', textAlign: 'center'},
        input1:{padding:'5px 15px 5px 15px',margin:'5px',background:'rgba(0,0,0,0.02)'},
        input2:{padding:'5px 15px 5px 15px',margin:'5px',background:'#e8e8e8',color:'#8c8c8c'},
        img:{width:'50px',height:'50px',},
        a:{padding:'0 150px 0 20px',lineHeight:'50px',textDecoration:'none',color:'#a8071a',fontSize:'25px'},
        div:{display:'flex',justifyContent: 'space-around',flexWrap: 'nowrap',background:'#e8e8e8',margin:'0 0 0 70px',},
        button:{border:'0',padding:'0 10px 0 10px',background:'#e8e8e8',color:'#f5222d',fontSize:'30px'}
    }
    if(this.state.click){
        return (
            <div>
                <form style={style.form} onSubmit={this.usernameSearch}>
                    <input style={style.input1}  type="text" placeholder="github username" value={this.state.username} onChange={this.usernameChange} />
                    <input style={style.input2} type="submit" value="SUBMIT"/>
                </form>
            </div>
        );
    }else{
        return(
            <div style={style.div}>
                <img style={style.img} src={this.state.avatar_url}/>
                <a href={this.state.html_url} style={style.a} >{this.state.username}</a>
                <button style={style.button} onClick={this.onClick}>X</button>
            </div>
        );
    }
}
}
export default Player;