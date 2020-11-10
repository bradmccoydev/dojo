import React, { Component } from 'react';
import { NavMenu } from './../components/NavMenu';

export class Milestones extends Component {
  static displayName = Milestones.name; 

  render() {
    return (
        <div className="App">
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}
            <header className="App-header">
              <p>
                <code>Milestones</code>
              </p>
              <p>
                <code>This page is for milestones</code>
              </p>
            </header>
        </div>
      )}               
   }
  
    
  export default Milestones;