import React, { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import AWS from 'aws-sdk';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from './../pages/Home';
import { Blog } from './../pages/Blog';
import { Learn } from './../pages/Learn';
import { Train } from './../pages/Train';
import { Teach } from './../pages/Teach';
import { Feedback } from './../pages/docs/Feedback';
import { PrivacyPolicy } from './../pages/docs/PrivacyPolicy';
import { Copyright } from './../pages/docs/Copyright';
import { Support } from './../pages/docs/Support';
import ReactGA from 'react-ga';
import { UserProvider } from './../context';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './../theme'
import './../style/App.css';
import config from './../config';
ReactGA.initialize('UA-175994834-1');
ReactGA.pageview(window.location.pathname);

export const history = createBrowserHistory();

Amplify.configure({
  Auth: {
    region: config.AWS_REGION,
    userPoolId: config.AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: config.AWS_COGNITO_WEB_CLIENT_ID,
    identityPoolId: config.AWS_COGNITO_IDENTITY_POOL_ID,
    mandatorySignIn: 'false'
  },
  'aws_appsync_graphqlEndpoint': config.API.graphql_endpoint,
  'aws_appsync_region': config.AWS_REGION,
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS'
});

Amplify.Logger.LOG_LEVEL = 'DEBUG';


function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
      setUsername(Auth.user.username);
  }, []);

  return (
    <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AmplifySignOut />
          <Router history={history}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route path='/home/:showHeader' component={Home} />

                <Route exact path='/learn' component={Learn} />
                <Route path='/learn/:showHeader' component={Learn} />

                <Route exact path='/classes' component={Train} />
                <Route path='/classes/:showHeader' component={Train} />

                <Route exact path='/teach' component={Teach} />
                <Route path='/teach/:showHeader' component={Teach} />

                <Route exact path='/blog' component={Blog} />
                <Route path='/blog/:showHeader' component={Blog} />

                <Route exact path='/feedback' component={Feedback} />
                <Route exact path='/privacy-policy' component={PrivacyPolicy} />
                <Route exact path='/copyright' component={Copyright} />
                <Route exact path='/support' component={Support} />
              </Switch>
            </Router>

    </ThemeProvider>
      </UserProvider>
  );
}

export default withAuthenticator(App);
