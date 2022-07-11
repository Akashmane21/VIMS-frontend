import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  function login(){
   
}
  return (
    <>
   
<div className='m-4'>
 
<center>
    <div className="registertitle">

<img src="https://static.vecteezy.com/system/resources/previews/000/350/083/original/leader-of-group-vector-icon.jpg" alt="" />
<h1>User Login</h1>
    </div>

</center>

<hr />
<div class="row">
<div class="col-md-4    ">
    {/* <form > */}
        <div class="form-group">
            <label for="Username" class="control-label">Username</label>
            <input id="Username" class="form-control" />
        </div>
        <div class="form-group">
            <label for="Password" class="control-label">Password</label>
            <input id="Password" type="password" class="form-control" />
        </div>
       
        <br />
        <div class="form-group">
            <a class="btn btn-primary" onClick={login} > Login </a>
        </div>
        <br />
            <br />
            <h5>New User ? <a href="/UserRegister">Register</a></h5>
    {/* </form> */}
</div>
</div>




</div>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

</>
  )
}
