import React from 'react';
import HomeMUI from './HomeMUI';

const Coord = ({showSignIn}) => (
    <div>
        <HomeMUI />
        <br /><br /><br />

        <div id="showJSONreq">
           	<button type="button" onClick={()=>{
              
              var input="{ \"lessons\" : [{ \"subj_code\":\"50.003\", \"type\":\"Lecture\", \"student_count\":40, \"hrs\":1.5, \"class_number\":1, \"session_number\":1 },{ \"subj_code\":\"50.003\", \"type\":\"Lecture\", \"student_count\":40, \"hrs\":1.5, \"class_number\":2, \"session_number\":1 },{ \"subj_code\":\"50.003\", \"type\":\"CBL\", \"student_count\":40, \"hrs\":1.5, \"class_number\":2, \"session_number\":2 },{ \"subj_code\":\"50.003\", \"type\":\"CBL\", \"student_count\":40, \"hrs\":1.5, \"class_number\":1, \"session_number\":2 },{ \"subj_code\":\"50.003\", \"type\":\"Lecture\", \"student_count\":40, \"hrs\":1.5, \"class_number\":3, \"session_number\":1 },{ \"subj_code\":\"50.003\", \"type\":\"CBL\", \"student_count\":40, \"hrs\":1.5, \"class_number\":3, \"session_number\":2 },{ \"subj_code\":\"50.003\", \"type\":\"CBL\", \"student_count\":40, \"hrs\":1.5, \"class_number\":1, \"session_number\":3 },{ \"subj_code\":\"50.003\", \"type\":\"CBL\", \"student_count\":40, \"hrs\":1.5, \"class_number\":3, \"session_number\":3 },{ \"subj_code\":\"50.003\", \"type\":\"CBL\", \"student_count\":40, \"hrs\":1.5, \"class_number\":2, \"session_number\":3 } ]}";
              var less=JSON.parse(input);
           		var tbl=document.createElement("table");

           		var tth=document.createElement("thead");
              var thr=document.createElement("tr");
              var dat1 = ["","subj_code","type","student_count","hrs","class_number","session_number"];
              for (var i=0;i<dat1.length;i++){
                var tbh=document.createElement("th");
                tbh.width="120px";
                tbh.style.textAlign="left";
                var tbht=document.createTextNode(dat1[i]);
                tbh.appendChild(tbht);
                thr.appendChild(tbh);
              }
              tth.appendChild(thr);
              tbl.appendChild(tth);

              var ttb=document.createElement("tbody");

              for (var k=0;k<less.lessons.length;k++){
                var tbr=document.createElement("tr");

                var tbd=document.createElement("td");
                var tbdt=document.createTextNode(k+1);
                tbd.appendChild(tbdt);
                tbr.appendChild(tbd);

                var eachCell=[less.lessons[k].subj_code, less.lessons[k].type, less.lessons[k].student_count, less.lessons[k].hrs, less.lessons[k].class_number, less.lessons[k].session_number]
                for (var d=0;d<eachCell.length;d++){
                  var tbe=document.createElement("td");
                  tbe.width="120px";
                  var tbx=document.createTextNode(eachCell[d]);
                  tbe.appendChild(tbx);
                  tbr.appendChild(tbe);
                }

                ttb.appendChild(tbr);
              }
              tbl.appendChild(ttb);

           		document.getElementById("showJSONreq").appendChild(tbl);
              document.getElementById("showJSONreq").removeChild(document.getElementById("showJSONreq").childNodes[0]);
            }}>show Instructors requests</button>
        </div>

        <br /><br /><br />
        <button type="button" onClick={()=>{ 
          console.log("run that core js");
          alert("schedule generated");
        }}>Generate Schedule</button>

    </div>
)

export default Coord;
