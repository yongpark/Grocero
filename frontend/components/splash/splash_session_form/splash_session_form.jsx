import React from 'react';
import { Link, withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

class SplashSessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      splashFormType: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleFormType = this.handleToggleFormType.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.state.splashFormType === 'signup' ?  this.props.signup({user}) : this.props.login({user});
  }

  handleToggleFormType(e) {
    e.preventDefault();
    this.setState({
      splashFormType: this.state.splashFormType === 'signup'
        ? 'login' : 'signup'
    });
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user ={
      username: 'guest',
      password: 'password'
    };
    this.props.login({user});
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    let splashButtonName,
        splashLinkText,
        guestLogin;
    if (this.state.splashFormType === "signup"){
      splashButtonName = "Sign Up";
      splashLinkText = "Log In";
      guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin}/>);
    }
    else {
      splashButtonName = "Log In";
      splashLinkText = "Sign Up";
      guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin}/>);
    }
    return(
      <section>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.authModalOpen} onRequestClose={this.props.closeAuthModal} modal={false} title={splashButtonName}>
            <form onSubmit={this.handleSubmit}>
              <TextField type="text" floatingLabelText="Username" errorText={this.props.errors.username === undefined ? "" : "Username is required"} value={this.state.username}  onChange={this.update("username")} fullWidth={true}/>
              <br/>
              <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password} onChange={this.update("password")} fullWidth={true} errorText={this.props.errors.password === undefined ? "" : "Password is required"}/>
              <br/>
              <FlatButton label="Submit" type="submit" primary={true}/>
            </form>
            <section>
              {guestLogin}
              <FlatButton label={splashLinkText} secondary={true} onTouchTap={this.handleToggleFormType}/>
            </section>
          </Dialog>
        </MuiThemeProvider>
      </section>
    )
  }
}

export default SplashSessionForm;
