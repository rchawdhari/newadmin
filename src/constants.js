import Cookies from 'universal-cookie';
export const ADD_REMINDER = 'ADD_REMINDER';
export const API_URL = 'http://localhost:3000/v1/admin';
export const AUTHENTICATION = '/authentication';
export const API_TOKEN='MWY5ZTNmNzFmN2M1ZTUyMjkwNjM2NGMzNmNjZTA3N2Q6M2RhMmI3OTgtNTY2MC00ZDRhLWJhZWQtNTZlMDI2MWRlYmZm';
const cookie = new Cookies();
export const JSON_CONTENT_TYPE = 'application/json';

export const GetHeaders = (email,access_token) => {
  cookie.set('adminUserToken',email,{ path: '/' })
  console.log(cookie.get('adminUserToken'));
}
