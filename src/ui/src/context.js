import React, { createContext } from 'react';

const UserContext = createContext({
  user: 'bmccoy',
  organisation: 'bradmccoy.io',
  unixTime: Math.round((new Date()).getTime() / 1000),
  showHeader: 'showHeader=false',
  tabIndex: 0,
  tab: '',
  updateState: () => {},
});

export class UserProvider extends React.Component {
  updateState = (key,value) => {
    this.setState({
      [key]: value
      });
    };

  state = {
    user: 'bmccoy',
    organisation: 'bradmccoy.io',
    unixTime: Math.round((new Date()).getTime() / 1000),
    showHeader: 'showHeader=false',
    tabIndex: 0,
    tab: '',
    updateState: this.updateState,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;