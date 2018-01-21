import {Auth,API} from 'aws-amplify';



export async function invokeApig({
  path,
  method,
  headers = {},
  body
}) {
  let apiName = 'CMS';
  let myInit = { // OPTIONAL
    'body': body, // replace this with attributes you need
  }

  switch (method) {
    case "GET":
      return await API.get(apiName, path);
    case "POST":
      return await API.post(apiName, path,myInit);
    default:
      return "ERROR"
  }

}
