import React, { Component } from 'react';
import {API} from 'aws-amplify';
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
import { makeStyles } from '@material-ui/core/styles';
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

const classes = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
    },
}));

export class Classes extends Component {
  static displayName = Classes.name; 

  state = {
    data: [],
    class: 'https://docs.google.com/presentation/d/1mZ_zWVe8Nnfhc-c02bhIPcuFQsd_0g94ThrP7cOBe_I/edit?usp=sharing',
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
      {({ tabIndex,
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
                  {this.state.data.map((data) =>
                  <Tab
                  label={data.class}
                  onClick={() =>
                   this.setState({ class: data.google_slide})
                   } />)}
                  </Tabs>
                </Paper>
              </Grid>
              <Grid item xs={10}>
                <ReactGoogleSlides
                  width={1350}
                  height={750}
                  slidesLink={this.state.class}
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
    
    
  export default Classes;