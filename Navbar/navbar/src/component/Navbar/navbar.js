import React, { Component } from 'react';
import { Menuitems } from './Menuitems.js';
import './navbar.css'

export default class Navbar extends Component{

    state = { clicked: false}

    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className='navbarItem'>
                <h1 className="navbar-logo">React 🙂</h1>
                <div className="menu-icon" onClick = {this.handleClick}>
                    <ion-icon name={this.state.clicked ? "contract-outline": "filter-outline"}></ion-icon>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* new form of map function */}
                    { Menuitems.map((item,ind) => {
                        return(
                        <li key={ind}><a className={item.cName} href={item.url} >
                            {item.title}
                        </a></li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }
}