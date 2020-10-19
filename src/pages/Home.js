import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import logo from '.././images/dojo.svg'

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

export class Home extends Component {
  static displayName = Home.name; 

  render() {
    return (
      <UserConsumer>
      {({ user,
          updateState}) => (
        <div className="App" style={{backgroundImage: `url(${MainImage})` }}>
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}

            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  <code>Welcome To Dojo</code>
                </p>
                <p>
                  <code>Dojo is a community enterprise DevOps Dojo designed to accelerate organizations through collabration and learning</code>
                </p>
              </header>
            </div>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Home;