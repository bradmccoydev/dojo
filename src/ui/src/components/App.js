import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, Greetings,SignIn,ConfirmSignIn,VerifyContact,ForgotPassword } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from './../pages/Home';
import { Blog } from './../pages/Blog';
import { Overview } from './../pages/Overview';
import { Classes } from './../pages/Classes';
import { Milestones } from './../pages/Milestones';
import { Templates } from './../pages/Templates';
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
          <Router history={history}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route path='/home/:showHeader' component={Home} />

                <Route exact path='/overview' component={Overview} />
                <Route path='/overview/:showHeader' component={Overview} />

                <Route exact path='/classes' component={Classes} />
                <Route path='/classes/:showHeader' component={Classes} />

                <Route exact path='/milestones' component={Milestones} />
                <Route path='/milestones/:showHeader' component={Milestones} />

                <Route exact path='/templates' component={Templates} />
                <Route path='/templates/:showHeader' component={Templates} />

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

export default withAuthenticator(App, true, [
  <Greetings />,
  <SignIn />,
  <ConfirmSignIn />,
  <VerifyContact />,
  <ForgotPassword />
])
