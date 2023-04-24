// import 'dotenv/config';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT,
  API_URL: process.env.BASE_API,
  SENTRY_URL: process.env.SENTRY,
  MODE: process.env.MODE,
};

export default CONFIG;
