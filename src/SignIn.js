import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import PrefForm from './PrefForm';
import Coord from './Coord';
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
        <br /><br />prototype version: usernames: coordinator, instructor1, instructor2, ...
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
                      if (document.getElementById("testA").value.slice(document.getElementById("testA").value.length-1,document.getElementById("testA").value.length)==="0"){
                        ReactDOM.render(<Home />, document.getElementById('root'));
                      } else {
                        ReactDOM.render(<PrefForm />, document.getElementById('root'));
                      }
                    } else if (document.getElementById("testA").value==="coordinator"){
                      ReactDOM.render(<Coord />, document.getElementById('root'));
                    } else {
                      console.log(document.getElementById("testA").value);
                      console.log("unrecognized");
                      document.getElementById('wrong-warn-1').style.display="";
                      document.getElementById('wrong-warn-2').style.display="";
                    }
                  } else {
                      document.getElementById('wrong-warn-1').style.display="";
                      document.getElementById('wrong-warn-2').style.display="";
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
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
        );
    }
}