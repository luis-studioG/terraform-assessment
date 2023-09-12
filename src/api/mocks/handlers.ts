import { rest } from 'msw';

import example from './data/example.json';

//https://github.com/mockapi-io/docs/wiki/Code-examples
const handlers = [
  rest.get('https://PROJECT_TOKEN.mockapi.io/users/1/tasks', (_, response, context) =>
    response(context.json(example)),
  ),
];

export default handlers;
