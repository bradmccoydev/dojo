import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import UpskillYourTeam from './UpskillYourTeam'

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

export class Blog extends Component {
  static displayName = Blog.name; 

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
            <UpskillYourTeam />
          </header>

        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Blog;