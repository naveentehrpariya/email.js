import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

 const Result =() => {
   return <p>Form Submitted</p>
 }

 // npm install emailjs-com --save

function Emailsend() {

    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kl1lr9q', 'template_f9hz1fz', e.target, 'user_2TTAP6KvHLpNHPFrcNBZL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showresult(true);
      };
 
    return <form class="bg-sucess p-5 w-50 my-3 mx-auto"  onSubmit={sendEmail} >
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="emailaddress" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>

            <div class="form-group">
                {result ? <Result />: null}
            </div>
        </form>
} 
export default Emailsend;