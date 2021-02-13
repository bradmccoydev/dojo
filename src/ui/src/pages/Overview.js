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
            <code>
              <p>
                What is Dojo
              </p>

              <p>              
                A dōjō (道場) is a Japanese word for a hall or space for immersive learning or meditation. The term has traditionally been used in the field of martial arts, but it has been increasingly applied in modern software development organizations to build new or improve Development Automation, Quality Engineering, Delivery, Lean, Agile, And DevOps muscles.
Much like the Japanese style of learning, DevOps Dojos are a physical learning space where teams can form habits of collaboration, trust, and transparency in a new way of working. At its core, a Dojo is a cultural movement involving learning, the spreading of knowledge, and the application of that knowledge to improve organizations. 
They provide continuous learning by experimentation.
              </p>
              <p>
                  How do DevOps Dojos work?
              </p>
              <p>
                DevOps Dojos focus on a team goal or capability, cultivating cultural change and the new practices and technologies needed to achieve that goal or capability. Engineers join experts (coaches and masters) in a dedicated workspace to iteratively work through and improve product planning, development, automation, and delivery. Teams are empowered to take responsibility for quality while driving towards better, faster, and higher quality products.
For example, a process that seems difficult to implement might be solved with ease by a group trained to collaborate closely. As another example, employees each tasked to handle different problems might produce limited output, whereas encouraging those employees to share their experiences and challenges with each other can result in more efficient — and better — solutions.
              </p>
              
            </code>
              
            </header>
        </div>
      )}               
   }
  
    
  export default Overview;