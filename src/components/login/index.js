import React from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import {connect} from 'react-redux';
import { FormControl } from 'react-bootstrap';
//import s from './login.css';
import bindFunc from '../../tools/util';
import {signinRequest} from '../../actions';
import {bindActionCreators}  from 'redux';

class Login extends React.Component{
  constructor(){
    super();
    bindFunc.call(this,['onChange','submitHandler']);
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler(e){
    e.preventDefault();
    this.props.signinRequest(this.state);
  }
  render() {

    return(
      <div className="col-md-4 col-md-offset-4 mtop-33">
        <div className="text-center">
          <h3 className="login-brand-text">BEWAKOOF ADMIN</h3>
        </div>


          <form role="form" onSubmit={this.submitHandler}>
            <fieldset>
              <div className="form-group">
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                />
              </div>
              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
            </fieldset>
          </form>
      </div>

    )
  }
}

export default connect(null,{signinRequest})(Login);
