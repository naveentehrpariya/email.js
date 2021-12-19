import { useState } from "react/cjs/react.development";
import React from "react";

function Else (props) {

    const [userdata, setuserdata] = useState({
        username:"", password:""
    });

    let nameattr, valueattr ;

    const handleInput = (e) => {
      console.log(e)
      nameattr = e.target.name;
      valueattr = e.target.value;
      setuserdata({...userdata, [nameattr]:valueattr})
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Your sform submitted`);
    };

 return (
  <div class="else">
      <h3>Else Condition component Works </h3>
      <form onSubmit={handleSubmit} class="p-4 m-3 bg-success text-white" >
          <div class="form-group">
              <input type="text" placeholder="Name" value={userdata.username} name="username" onChange={handleInput} />
              {userdata.username}
          </div>
          <div class="form-group">
              <input type="password" placeholder="Password" value={userdata.password} name="password" onChange={handleInput} />
          </div>
          <div class="form-group mt-3">
              <button  type="submit">Submit</button>
          </div>
      </form>
  </div>
 )
}
export default Else;