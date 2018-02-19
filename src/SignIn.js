import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './styles.css';

export default class SignIn extends Component {

    render() {

        return (

      <div>

        <h1>Welcome</h1> This is SUTD Smart Event Scheduling app.
        This app aims to assist course coordinators in generating a term 
        schedule, before the start of every new term.
        Instructors will be able to enter preferences to this app, which the
        course coordinators may use to revise a term schedule.
        <br /><br />prototype version: usernames: instructor1, instructor2, ...
        <br />password equals username
        <br /><br />
        <form id="login-form" action method="POST">
          <div className="container">
            <table>
              <tbody><tr><th colSpan={2}>Login to continue.</th>
                </tr><tr>
                  <td><label><b>Username</b></label></td>
                  <td><input id="testA" placeholder="Enter Username" name="uname" required type="text" /></td>
                  <td id="wrong-warn-1" style={{color: 'red', display: 'none'}}>Incorrect username or</td>
                </tr>
                <tr>
                  <td><label><b>Password</b></label></td>
                  <td><input id="testB" placeholder="Enter Password" name="pwd" required type="password" /></td>
                  <td id="wrong-warn-2" style={{color: 'red', display: 'none'}}>Incorrect password</td>
                </tr>
                <tr>
                  <td><button type="button" onClick={()=>{ 
                  if (document.getElementById("testA").value===document.getElementById("testB").value){  
                    if (document.getElementById("testA").value.slice(0,10)==="instructor"){
                      ReactDOM.render(<Home />, document.getElementById('root'));
                      console.log("demo only");
                    } else {
                      console.log(document.getElementById("testA").value.slice(0,10));
                    }
                  }
                  }}>Login</button></td>
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