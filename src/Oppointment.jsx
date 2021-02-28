import React from "react";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Ops from "./Ops";



export default function Oppointment(){

   return(
     <div className="oppointment">
      <h2> OPPOINTMENT </h2>
      
<p>  todays date is  </p>

<div className="sheduling">
   <div className="heading">
   <CalendarTodayIcon />
   <button>DATE</button>
   <button>TIME</button>
   <button>NAME</button>
   <button>STATUS</button>
   </div>
   
   <Ops />
   <Ops />
   <Ops />
   <Ops />
   <Ops />
   
 </div>          

     </div>
   );
}