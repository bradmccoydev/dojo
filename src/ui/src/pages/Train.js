import React, { Component } from 'react';
import ReactGoogleSlides from "react-google-slides";
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import WhatIsDojo from './WhatIsDojo'
import { makeStyles } from '@material-ui/core/styles';

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

const classes = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
    },
}));

const tabs = [
  {
    icon: <PeopleIcon/>,
    label: 'Introduction To GraphQL',
    url: 'https://docs.google.com/presentation/d/1qQPhvSUlj74yIEu2YcH1qPrVBxU_DYF8lT3vd34UwDg/edit?usp=sharing'
  },
  {
    icon: <PeopleIcon/>,
    label: 'Introduction To IAM',
    url: 'https://docs.google.com/presentation/d/17SNQvOa5nUwES3LIwYmbCjzehfhnolUh7cbSpv8S5Ck/edit?usp=sharing'
  },
  {
    icon: <PeopleIcon/>,
    label: 'Introduction To Glue',
    url: 'https://docs.google.com/presentation/d/1mZ_zWVe8Nnfhc-c02bhIPcuFQsd_0g94ThrP7cOBe_I/edit?usp=sharing'
  },
];

export class Train extends Component {
  static displayName = Train.name; 

  render() {
    return (
      <UserConsumer>
      {({ tabIndex,
          dojoClass,
          updateState}) => (
        <div className="App" style={{backgroundImage: `url(${MainImage})` }}>
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}
              <header className="App-header">
              <Grid container spacing={1}>
              <Grid item xs={2}>
                <Paper>  
                    <Button
                      variant="contained"
                      color="primary"
                      href="#contained-buttons">
                      Schedule Class
                    </Button>
                  <br /><br />
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
                  onClick={() =>
                   updateState({ tabIndex: i})
                   } />)}
                  </Tabs>
                </Paper>
              </Grid>
              <Grid item xs={10}>
                <ReactGoogleSlides
                  width={1350}
                  height={850}
                  slidesLink={dojoClass}
                  showControls
                />
              </Grid>
            </Grid>
              </header>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Train;