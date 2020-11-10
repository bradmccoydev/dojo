import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';

export class Overview extends Component {
  static displayName = Overview.name; 

  render() {
    return (
        <div className="App">
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}
            <header className="App-header">
              <p>
                <code>What is Dojo</code>
              </p>
              <p>
                <code>Dojo is a community enterprise DevOps Dojo designed to accelerate organizations through collabration and learning</code>
              </p>
            </header>
        </div>
      )}               
   }
  
    
  export default Overview;