// eslint-disable-next-line @typescript-eslint/no-var-requires
import jsonServer from 'json-server';

import { apiEndpoints } from '../../utils/apiEndpoint.js';
const server = jsonServer.create();
const router = jsonServer.router('src/api/mocks/jsonServer/db.json');
const middlewares = jsonServer.defaults();

const { LOGIN, GITHUB_AUTH } = apiEndpoints;

server.use(jsonServer.bodyParser);
server.use(middlewares);

const expectedGoogleAuthSuccessfulServerResponseData = {
  data: {
    id: '24746c4d-f14a-440d-9c78-462aea122e88',
    googleId: '105311298844031173519',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@studiographene.com',
    profilePic: 'http://marcallenortho.com/wp-content/uploads/2017/04/orthodontic-recession.jpg',
    department: '',
    jobTitle: 'Software Engineer',
    isActive: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNDc0NmM0ZC1mMTRhLTQ0MGQtOWM3OC00NjJhZWExMjJlODgiLCJlbWFpbCI6InBhdmxvLm9tZWxpYW5jaHVrQHN0dWRpb2dyYXBoZW5lLmNvbSIsImlzcyI6InN0dWRpb2dyYXBoZW5lIiwicm9sZSI6IklORElWSURVQUwiLCJwZXJtaXNzaW9ucyI6e30sImlhdCI6MTY4NDMzNDcyNSwiZXhwIjoxNjg1NTQ0MzI1fQ.3rsUJ6J_K7oHVOGO_oi1Bz0YZFVBwSDMqFLWkw16WDw',
    role: 'ADMIN',
    isGithubIntegrated: false,
    isGithubIntegrationMandatory: true,
  },
  message: 'Success',
  statusCode: 200,
};

/* function throwErr() {
  throw new Error('Something went wrong');
} */
// Custom middleware to access POST methids.
// Can be customized for other HTTP method as well.
server.use((req, res, next) => {
  console.log('POST request listener');
  //const body = req.body;
  //endpoint for google login
  if (req.method === 'POST' && req.url === LOGIN) {
    res.statusText = 'Your have signed-up successfully';
    res.json(expectedGoogleAuthSuccessfulServerResponseData);
    return;
  }
  //endpoint for github linking
  if (req.method === 'POST' && req.url === GITHUB_AUTH) {
    const switchKey = !!req.body.code;
    switch (switchKey) {
      case false:
        res.status(500).jsonp({
          error: 'error message here',
        });
        break;
      case true:
        res.json();
        break;

      default:
        break;
    }
    return;
  } else {
    //Not a post request. Let db.json handle it
    next();
  }
});
server.use(router);

server.listen(3002, () => {
  console.log('JSON Server is running on http://localhost:3002');
});
