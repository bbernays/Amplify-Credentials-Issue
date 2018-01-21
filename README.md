# Example of Amplify Credentials Refresh Issue

This app was created and built with  `create-react-app`

## Build Instructions
```
npm install; 
npm run start;
```

## Issue
Once the id token from Cognito times out Amplify does not auto refresh the token in order to grab new access keys. Prior to 0.1.36 amplify just used the old access keys now the library realizes the keys are invalid and tries to grab new ones. When it does this it presents the old id token to Cognito and cognito just returns an error cause the token is expired


## Reproducing Issue

1. Login
2. Let app sit for 1 hour (till the tokens expire)
3. Click on button to make a request for API --> This will return an error
4. Refresh page
5. App re-authenticates with Cognito and grabs new tokens and now can make requests from API


