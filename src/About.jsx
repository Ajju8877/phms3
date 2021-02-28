import React from "react";

export default function About(){
  return(
<div className="about">

<div className="p1">
<h2> ABOUT </h2>
  <img src="https://theiotprojects.com/wp-content/uploads/2020/06/IoT-Based-Patient-Health-Monitoring-using-ESP8266-ESP32.jpg" />;
 <p>Health monitoring is the major problem in today’s world. Due to lack of proper health monitoring, patient suffer from serious health issues. There are lots of IoT devices now days to monitor the health of patient over internet. Health experts are also taking advantage of these smart devices to keep an eye on their patients. With tons of new healthcare technology start-ups, IoT is rapidly revolutionizing the healthcare industry. Here in this project, we will make an IoT based Health Monitoring System which records the patient heart beat rate and body temperature and also send an email/SMS alert whenever those readings goes beyond critical values. Pulse rate and body temperature readings are recorded over ThingSpeak and Google sheets so that patient health can be monitored from anywhere in the world over internet. A panic will also be attached so that patient can press it on emergency to send email/sms to their relatives.</p>

</div>



</div>
  );
}