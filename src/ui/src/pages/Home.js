import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserConsumer } from './../context';
import { NavMenu } from './../components/NavMenu';
import DesktopImage from '.././images/Background.jpg'
import MobileImage from '.././images/Background.jpg'
import { makeStyles } from '@material-ui/core/styles';
import ReactGoogleSlides from "react-google-slides";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const MainImage = window.innerWidth >= 650 ? DesktopImage : MobileImage;

const classes = {
  root: {
    flexGrow: 1,
    margin: "100px",
    padding: "200px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.1)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
};



export class Home extends Component {
  static displayName = Home.name; 

  render() {
    return (
      <UserConsumer>
      {({ user,
          updateState}) => (
        <div className="App" style={{backgroundImage: `url(${MainImage})` }}>
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu/>}

      <Grid container className={classes.root} >
      <Box m={2} pt={3}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Next Class
              </Typography>
              <Typography variant="h5" component="h2">
                GraphQL
              </Typography>
              <br />
              <Typography variant="body2" component="p">
                An introduction to AWS App Sync and GraphQL
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                component={Link} to="/classes?showheader=true">
                Attend Class
              </Button>
            </CardActions>
          </Card>
          </Box>
      </Grid>
                <br /><br /><br /><br /><br /><br /><br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Home;