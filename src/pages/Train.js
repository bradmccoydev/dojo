import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import train from '.././images/train.svg'

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

export class Train extends Component {
  static displayName = Train.name; 

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
                <img src={train} className="App-logo" alt="logo" />
                <p>
                  <code>Train</code>
                </p>
              </header>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Train;