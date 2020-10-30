import React, { Component } from 'react';
import { UserConsumer } from './../../context';
import { NavMenu } from './../../components/NavMenu';

export class Copyright extends Component {
  static displayName = Copyright.name;
    
  render() {
    return (
      <UserConsumer>
      {({ user,
          updateState}) => (
        <div>
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu />
          }
          This page is for a Copyright
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Copyright;