import React from "react";

export default function Signin(){
  return(
    <div className="signup">
      <h2> sign up </h2> <br/>
      <form>
        <input type="text"name="first_name"placeholder="Enter your first name"/> <br/>
        <input type="text"name="last_name"placeholder="Enter your last name"/> <br/>
        <input type="email"name="email"placeholder="Enter your Email id"/> <br/>
        <input type="no"name="mobile"placeholder="Enter your mobile no."/> <br/>
        <input type="no"name="age"placeholder="Enter your Age"/> <br/>
        <input type="submit"name="submit"/>
     </form> 

    </div>
  );
}