import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeMUI from './HomeMUI';
import './styles.css';
import registerServiceWorker from './registerServiceWorker';

export default class HeroSearchView extends Component {

    render() {

        return (

<div>
                  
        <HomeMUI />
        <h1>Welcome</h1> This is SUTD Smart Event Scheduling app.
        This app aims to assist course coordinators in generating a term 
        schedule, before the start of every new term.
        Instructors will be able to enter preferences to this app, which the
        course coordinators may use to revise a term schedule.
        <br /><br />prototype version: usernames: coordinator, instructor1, instructor2, ...
        <br />password equals username
        <br /><br />
        {/*<form action="validator.js">
  <div class="container">
    <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
    <br>
    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <br>
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked"> Remember me
    </label>
  </div>
</form>*/}
        <form id="login-form" action method="POST">
          <div className="container">
            <table>
              <tbody><tr><th colSpan={2}>Login to continue.</th>
                </tr><tr>
                  <td><label><b>Username</b></label></td>
                  <td><input placeholder="Enter Username" name="uname" required type="text" /></td>
                  <td id="wrong-warn-1" style={{color: 'red', display: 'none'}}>Incorrect username or</td>
                </tr>
                <tr>
                  <td><label><b>Password</b></label></td>
                  <td><input placeholder="Enter Password" name="pwd" required type="password" /></td>
                  <td id="wrong-warn-2" style={{color: 'red', display: 'none'}}>Incorrect password</td>
                </tr>
                <tr>
                  <td><button type="submit">Login</button></td>
                  <td><label>
                      <input type="checkbox" /> Remember me
                    </label></td>
                  <td />
                </tr>
              </tbody></table>
          </div>
        </form>
      </div>
        );
    }
}