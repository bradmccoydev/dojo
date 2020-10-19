import React, { Component } from 'react';
import { UserConsumer } from './../context';

export class WhatIsDojo extends Component {
  static displayName = WhatIsDojo.name; 

  render() {
    return (
      <UserConsumer>
      {({ user,
          updateState}) => (
        <div className="App">
            <div className="App">
              <header className="App-header">
                <p>
                  <code>What is Dojo</code>
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
    
  export default WhatIsDojo;