import Cookies from 'universal-cookie';
import base64 from 'base-64';
const cookie = new Cookies();

function setCookie(key,value){
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);
  cookie.set(key,value,{ path: '/',expires: expiryDate });
}

function getCookie(key){
  return cookie.get(key);
}
export const saveCredentials = (data) => {
  console.log(data);
  setCookie('adminUserToken',data.token)
  setCookie('adminUserEmail',data.email)
  setCookie('adminUserAccessToken',base64.encode(`${data.token.trim()}:${data.email.trim()}`))
  console.log("COOkie",getCookie('adminUserAccessToken'));
}
