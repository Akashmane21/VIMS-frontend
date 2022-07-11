import React , { useEffect} from 'react'
import axios from "axios";

export default function AdminRegister() {

    useEffect(() => {
      

    }, [])
    

    function AddUser(){
      
    }
    
  return (
    <>
        {/* <Navbar /> */}
    <div className='m-4'>
     
<center>
    <div className="registertitle">

<img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
<h1>Admin Registeration</h1>
    </div>

</center>
<hr />
<div class="row">
    <div class="col-md-4">
        {/* <form > */}
        <div class="form-group">
                <label for="First Name" class="control-label">First Name</label>
                <input id="Firstname" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Last Name" class="control-label">Last Name</label>
                <input id="Lastname" class="form-control" />
            </div>

            <div class="form-group">
                <label for="Address" class="control-label">Address</label>
                <input id="Address" class="form-control" />
            </div>
        
            <div class="form-group ">
                <label for="Email" class="control-label">Email</label>
                <input id="Email" type="email" class="form-control" />
            </div>
            
            <div class="form-group">
                <label for="Password" class="control-label">Password</label>
                <input id="Password" type="password" class="form-control" />
            </div>

            <div class="form-group">
                <label for="Phone" class="control-label">Phone</label>
                <input id="Phone" type="number" class="form-control" />
            </div>
           
           
            <br />
            <div class="form-group">
                <a class="btn btn-primary" onClick={AddUser} > Register Now </a>
            </div>
            <br />
            <br />
            <h5>Already existing user ? <a href="/AdminLogin">login</a></h5>
        {/* </form> */}
    </div>
</div>




    </div>
    </>
  )
}
