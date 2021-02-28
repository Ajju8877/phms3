import React from "react";

export default function Footer(){
  return(
    <div className="footer">
       <div className="address">
       <h3>ADDRESS :</h3> <hr/>
         <p>
    	     Ghodbunder road,<br/>
           kasrvadvli,<br/>
           Thane(w)-400610.<br/>
    	  </p>
       </div>
       
       <div className="check_up">
       <ul>
    	   	<li>Full body check-up</li>
    		  <li>Blood check-up</li>
    		  <li>Equipments requirement</li>
    		  <li>Admission/Emergency</li>
    	</ul>
      </div> 

<div className="contact_us">
         <ul>
         <li>mobile : 8104767040 </li>
         <li>Email  : support@medica.com </li>
      	 <li>copyright.medica@2020 </li>
      	 </ul>
       </div>

    </div>
  );
}