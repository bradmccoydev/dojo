import React, { Component } from 'react';
import { UserConsumer } from './../../context';
import { makeStyles } from '@material-ui/core/styles';
import { NavMenu } from './../../components/NavMenu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const classes = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
    },
      tabs: {
        padding: 0,
        marginTop: 0,
        backgroundColor: "blue",
      },
}));

const feedbackType = [
  {
    value: 'Android',
    label: 'Android',
  },
  {
      value: 'IOS',
      label: 'IOS',
  },
];

export class Feedback extends Component {
  static displayName = Feedback.name;

  state = {
    user: '',
    feedbackType: '',
}

updateState = (key,value) => {
  this.setState({
    [key]: value
    });
  };

async submitForm() {
  console.log('Form Submitted');
}
    
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
          <TextField
              required
              size="small"
              fullWidth
              id="outlined-required"
              variant="outlined"
              value={this.state.user}
              onChange={event => {
                  this.updateState('user',event.target.value);
              }}
              className={classes.textField}
              margin="normal"
          />
          <TextField
              id="outlined-select-user-native"
              size="small"
              select
              margin="normal"
              fullWidth
              className={classes.textField}
              value={this.state.feedbackType}
              onChange={event => {
                  this.updateState('feedbackType', event.target.value);
              }}
              SelectProps={{
                  native: true,
                  MenuProps: {
                  className: classes.menu,
                  },
              }}
              margin="normal"
              variant="outlined"
          >
            {feedbackType.map(option => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
          </TextField>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => this.submitForm()}>
           Submit
          </Button>
        </div>
      )}               
      </UserConsumer> 
            );
        }
    }
    
    
  export default Feedback;