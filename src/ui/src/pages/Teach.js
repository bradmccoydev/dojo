import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import teach from '.././images/teach.svg'

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

export class Teach extends Component {
  static displayName = Teach.name; 

  render() {
    return (
      <UserConsumer>
      {({ user,
          updateState}) => (
        <div className="App" style={{backgroundImage: `url(${MainImage})` }}>
       {this.props.match.params.showHeader === "showHeader=false"
        ? <div></div>
        : <NavMenu/>}
      <header className="App-header">
        <img src={teach} className="App-logo" alt="logo" />
        <p>
          <code>Teach</code>
        </p>
      </header>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Teach;