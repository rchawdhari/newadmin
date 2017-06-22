import {API_URL,API_TOKEN,AUTHENTICATION} from '../constants';
import axios from 'axios';
import {saveCredentials} from '../credentials/set-credentials'
import history from '../tools/history.js';
import {AUTH_USER,AUTH_ERROR} from './types'


export function signinRequest(user){
  return function(dispatch){
    axios.post(`${API_URL}${AUTHENTICATION}`,{authentication: user},{headers:{'Api-token': API_TOKEN}})
    .then((response) => {
      console.log("response",response.data);
      dispatch({type: AUTH_USER});
      saveCredentials(response.data);
      history.push("/");
    })
    .catch((error) => {
      console.log("Errorasd",error.response.data.error)
      dispatch({type: AUTH_ERROR});
    });
  }
}
