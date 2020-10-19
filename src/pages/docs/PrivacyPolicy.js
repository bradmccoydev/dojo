import React, { Component } from 'react';
import { UserConsumer } from './../../context';
import { makeStyles } from '@material-ui/core/styles';
import { NavMenu } from './../../components/NavMenu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';

const classes = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export class PrivacyPolicy extends Component {
  static displayName = PrivacyPolicy.name;
    
  render() {
    return (
      <UserConsumer>
      {({ user,
          updateState}) => (
        <div>
          {this.props.match.params.showHeader === "showHeader=false"
          ? <div></div>
          : <NavMenu />
          }
          <br />
          <Card className={classes.root}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Privacy Policy"
                subheader="May 8, 2020"
              />
              <CardMedia
                className={classes.media}                
                title="Privacy Policy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box m={1}>
                    Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand:
                    This Privacy Policy covers the information we collect about you when you use our products or services, or otherwise interact with us (for example, by attending our premises or events or by communicating with us), unless a different policy is displayed. 
                    Osyssey Cloud, we and us refers to Odyssey Cloud and any of our corporate affiliates.  We offer a wide range of products, including our cloud, server and data center products.  We refer to all of these products, together with our other services and websites as "Services" in this policy.
                    This policy also explains your choices surrounding how we use information about you, which include how you can object to certain uses of information about you and how you can access and update certain information about you. 
                  </Box>
        
                  <Box fontWeight="fontWeightBold" m={1}>
                  If you do not agree with this policy, do not access or use our Services or interact with any other aspect of our business.  
                  </Box> 
                </Typography>
              </CardContent>        
             </Card>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default PrivacyPolicy;