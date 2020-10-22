import React, { Component } from 'react';
import { UserConsumer } from './../context';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import learn from '.././images/learn.svg'
import train from '.././images/train.svg'
import teach from '.././images/teach.svg'
import github from '.././images/github.png'
import blog from '.././images/blog.svg'
import Logo from '../images/dojo.svg'
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
          <Box display='flex' flexGrow={1}>
            DOJO   道場
          </Box>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/learn?showheader=true">                                  
            Train                     
          </IconButton>
          <IconButton
            style={{gutterBottom: true}}
            color="inherit"
            aria-label="Menu"
            component={Link} to="/train/showheader=true">                                  
            Coach                                    
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