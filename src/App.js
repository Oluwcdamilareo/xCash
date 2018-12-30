import React from 'react'
import {HashRouter, browserHistory, NavLink, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Order from './Order'
import NavBar from './NavBar.js'
import Popup from 'reactjs-popup'
import MobileMenu from './MobileMenu.js';
import BurgerIcon from './BurgerIcon.js';


const contentStyle ={
    width:"80%",
    height: "70%",
    border: "none",
    textAlign:"center",
    color: "white",
    borderRadius:"10px",
    background: "rgb(4, 105, 182)"
}
class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <div id="app-container">
                    <div className='header'>                       
                        <NavLink exact to='/'><img src='' alt='xCashng' id="logo-header"/></NavLink>
                        <Popup
                        modal
                        closeOnDocumentClick
                        className="popup"
                        contentStyle={contentStyle}
                        overlayStyle={{background:'rgba(255,255,255,.9'}}
                        trigger={open=><BurgerIcon open={open}/>}
                        >

                            {close=><MobileMenu close={close}/>}
                        </Popup>
                        <NavBar/>
                    </div>

                    <div className='content'>
                        <Route exact path='/' component={Home}/> 
                        <Route path='/sign-in' component={SignIn}/>
                        <Route path='/sign-up' component={SignUp}/>
                        <Route path='/order' component={Order}/>                   
                    </div>

                    <div id="footer">
                        xCash 2018
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;