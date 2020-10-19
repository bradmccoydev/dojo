import React, { Component } from 'react';
import { UserConsumer } from './../../context';
import { NavMenu } from './../../components/NavMenu';

export class Support extends Component {
  static displayName = Support.name;
   
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
          This page is for a Support form
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Support;