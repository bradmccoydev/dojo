import React, { Component } from 'react';
import ReactGoogleSlides from "react-google-slides";
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'

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
              <ReactGoogleSlides
                  width={1350}
                  height={850}
                  slidesLink="https://docs.google.com/presentation/d/1qQPhvSUlj74yIEu2YcH1qPrVBxU_DYF8lT3vd34UwDg/edit?usp=sharing"
                  showControls
                />
              </header>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Train;