import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import github from '.././images/github.png'
import './NavMenu.css';

const classes = makeStyles((theme) => ({
  header: {
    marginRight: 1,
    marginLeft: 1,
    margin: "10px",
    },
  iconStyles: {
    marginRight: 0,
    },
  toolbarButtons: {
    marginLeft: 'auto',
    display: "initial",
    textAlign: "bottom"
  },
}));

export class NavMenu extends Component {
  static displayName = NavMenu.name;  

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <UserConsumer>
      {({ showHeader }) => (
      <div>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className="nav-bar">
          <Box 
            display='flex'
            flexGrow={1}
            style={{ textDecoration: 'none' }}
            component={Link} to="/home/showheader=true">
            DOJO   道場
          </Box>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/overview?showheader=true">                                  
            Overview                     
          </IconButton>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/classes?showheader=true">                                  
            Classes                     
          </IconButton>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/milestones?showheader=true">                                  
            Milestones                     
          </IconButton>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/templates?showheader=true">                                  
            Templates                     
          </IconButton>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/blog?showheader=true">                                  
            Blog                     
          </IconButton>
          <IconButton>
            <AmplifySignOut />   
          </IconButton>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            onClick={event =>  window.location.href='https://github.com/bradmccoydev/dojo'}>                                 
            <img
              style={classes.iconStyles}
              src={github}
              alt="Dojo"
              width="30"
              height="30" />                      
          </IconButton>
        </Toolbar>
        </AppBar>
      </div>
      )}               
      </UserConsumer> 
    );
  }
}