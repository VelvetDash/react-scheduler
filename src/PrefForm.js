import React from 'react';
import HomeMUI from './HomeMUI';
import './styles.css';

const PrefForm = ({showSignIn}) => (
    <div>
        <HomeMUI />

        <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <tbody><tr><th colSpan={3}>Input your preferences</th>
            </tr><tr>
              <td>Subject</td>
              <td colSpan={2}>
                <select name="cars">
                  <option value={50001}>50.001 Introduction to Information Systems and Programming</option>
                  <option value={50002}>50.002 Computation Structures</option>
                  <option value={50003} selected>50.003 Elements of software construction</option>
                  <option value={50004}>50.004 Algorithms</option>
                  <option value={50034}>50.034 Introduction to probability and statistics</option>
                </select> 
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Number of Lecture Hours</td>
            </tr>
            <tr>
              <td colSpan={2}><input id="lecHrsSlide" name="lecHrsSlide" min={0} max={12} step="0.5" onChange={()=>{document.getElementById('lecHrs').value=document.getElementById('lecHrsSlide').value;}} type="range" /></td>
              <td><input id="lecHrs" defaultValue type="text" /></td>
            </tr>
            <tr>
              <td colSpan={3}>Number of Cohort Hours</td>
            </tr>
            <tr>
              <td colSpan={2}><input id="cohortHrsSlide" name="cohortHrsSlide" min={0} max={12} step="0.5" onChange={()=>{document.getElementById('cohortHrs').value=document.getElementById('cohortHrsSlide').value;}} type="range" /></td>
              <td><input id="cohortHrs" defaultValue type="text" /></td>
            </tr>
            <tr>
              <td colSpan={3}>Number of Lab Hours</td>
            </tr>
            <tr>
              <td colSpan={2}><input id="labHrsSlide" name="labHrsSlide" min={0} max={12} step="0.5" onChange={()=>{document.getElementById('labHrs').value=document.getElementById('labHrsSlide').value;}} type="range" /></td>
              <td><input id="labHrs" defaultValue type="text" /></td>
            </tr>
            <tr>
              <td><button type="button" onClick={()=>{if (document.getElementById("lecHrs").value && document.getElementById("cohortHrs").value && document.getElementById("labHrs").value) {alert('submitted');} else {alert('complete all the fields!');}}}>Submit</button></td>
              <td><button type="button" onClick={()=>{document.getElementById("lecHrsSlide").value=3;document.getElementById("cohortHrsSlide").value=3;document.getElementById("labHrsSlide").value=1.5;document.getElementById("lecHrs").value=3;document.getElementById("cohortHrs").value=3;document.getElementById("labHrs").value=1.5;}}>Defaults</button></td>
              <td><button type="button" onClick={()=>{document.getElementById("lecHrsSlide").value=null;document.getElementById("cohortHrsSlide").value=null;document.getElementById("labHrsSlide").value=null;document.getElementById("lecHrs").value=null;document.getElementById("cohortHrs").value=null;document.getElementById("labHrs").value=null}}>Clear</button></td>
            </tr>
          </tbody></table>

    </div>
)

export default PrefForm;