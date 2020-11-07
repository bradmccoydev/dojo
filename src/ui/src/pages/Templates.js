import React, { Component } from 'react';
import {API} from 'aws-amplify';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import teach from '.././images/teach.svg'
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

export class Templates extends Component {
  static displayName = Templates.name; 

  state = {
    data: [],
  }

  componentDidMount(){
      this.fetch()
  }

  fetch = async () => {
      const dojoClasses = await API.graphql({ query: queries.listDojoClasses });
      this.setState({
          data: dojoClasses.data.listDojoClasses.items
      });
      console.log(dojoClasses.data.listDojoClasses.items)
  }

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
    
    
  export default Templates;