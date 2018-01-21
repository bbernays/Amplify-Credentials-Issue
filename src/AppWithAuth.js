import App from "./App";
import React, { Component } from "react";
import Amplify from 'aws-amplify';
import { Authenticator,AmplifyTheme } from 'aws-amplify-react';

import config from "./config";



const noNavBar = Object.assign({}, AmplifyTheme.nav, {display: 'none' });

const MyTheme = Object.assign({}, AmplifyTheme, { nav: noNavBar });





Amplify.configure({
    Auth: {
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    API: {
      endpoints: [
          {
              name: "CMS",
              endpoint: config.apiGateway.URL
          }
      ]
    }

  }
);

class AppWithAuth extends Component {
  render(){
    return (
      <Authenticator theme={MyTheme}>
          <App />
      </Authenticator>
    );
  }
}

export default AppWithAuth;
