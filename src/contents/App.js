import React from 'react';
import Popular from './Popular';
import Battle from './Battle';
import {Route,Switch,Redirect} from 'react-router-dom';
class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                <Route exact path='/' component={Popular}/>
                <Route exact path='/battle/' component={Battle}/>
                <Redirect to='/' />
                </Switch>
            </div>
        )   
    }
}
export default App;