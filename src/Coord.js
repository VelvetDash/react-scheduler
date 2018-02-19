import React from 'react';
import HomeMUI from './HomeMUI';

const Coord = ({showSignIn}) => (
    <div>
        <HomeMUI />
        <br /><br /><br />

        <div id="showJSONreq">this space to show the JSON request data
           	<button type="button" onClick={()=>{
           		console.log("watch this...");
           		var tbl=document.createElement("table");
           		
           		document.getElementById("showJSONreq").appendChild(tbl);
            }}>show requests</button>
        </div>

        <br /><br /><br />
        <button type="button" onClick={()=>{ 
          console.log("run that core js");
        }}>Generate Schedule</button>

    </div>
)

export default Coord;