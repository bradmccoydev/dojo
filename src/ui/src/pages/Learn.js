import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import learn from '.././images/learn.svg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import WhatIsDojo from './WhatIsDojo'

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

const classes = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
    },
}));

const tabs = [
  {
    icon: <PeopleIcon/>,
    label: 'What is Dojo',
    component: <WhatIsDojo />
  },
];

export class Learn extends Component {
  static displayName = Learn.name; 

  render() {
    return (
      <UserConsumer>
      {({ tabIndex,
          updateState}) => (
        <div className="App" style={{backgroundImage: `url(${MainImage})` }}>
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}
            <header className="App-header">
            <br />
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Paper>  
                <Tabs
                  orientation="vertical"
                  variant="fullWidth"
                  value={tabIndex}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                >
                {tabs.map((tab, i) => 
                <Tab
                 label={tab.label}
                 onClick={() => updateState({ tabIndex: i})} />)}
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs={10}>
              {(tabs[tabIndex] && tabs[tabIndex].component) || <div>Loading... not found</div>}
            </Grid>
          </Grid>
              <img src={learn} className="App-logo" alt="logo" />
              <p>
                <code>Learn</code>
              </p>
            </header>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
  export default Learn;