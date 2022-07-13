import React from 'react'
import axios from "axios";
import Navbar from '../comps/Navbar';
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function UserRegister() {
    const { baseUrl} =useCounter()

    function AddUser(values){
        axios
        .post(`${baseUrl}/Customers/`, values)
        .then((response) => {
         alert("Successfully Added")
        //  window.location.reload()
        })
        .then((err) => {
          console.log(err);
        });
    }
    
  return (
    <>
    <Navbar />
    <div className='m-4'>
     

    
    <center>
    <div className="registertitle">

<img src="https://static.vecteezy.com/system/resources/previews/000/350/083/original/leader-of-group-vector-icon.jpg" alt="" />
<h1>User Registeration</h1>
    </div>

</center>
<hr />
<div class="row">
    <div class="col-md-4 ">


    <Formik
        initialValues={{ }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          AddUser(values)
        }}
      >
        <Form>
        <div class="form-group">
                <label for="First Name" class="control-label">First Name</label>
                <Field required={true} name="first_name" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Last Name" class="control-label">Last Name</label>
                <Field required={true} name="last_name" type="text" class="form-control" />
            </div>

            <div class="form-group">
                <label for="Address" class="control-label">Address</label>
                <Field required={true} name="address" type="text" class="form-control" />
            </div>
        
            <div class="form-group ">
                <label for="Email" class="control-label">Email</label>
                <Field required={true} name="email" type="email"  class="form-control" />
            </div>
            
            <div class="form-group">
                <label for="Password" class="control-label">Password</label>
                <Field required={true} name="password" type="password"  class="form-control" />
            </div>

            <div class="form-group" style={{ marginRight:200 }}>
                <label for="Phone" class="control-label">Phone</label>
                <Field required={true} name="phone_no" type="text" class="form-control" />
            </div>
            <div class="form-group">
                
                 </div>
            <br /><br />
            
            <div class="form-group" style={{marginTop:40 , marginBottom:30 }}>
          <button type="submit" class="btn btn-primary form-control">Submit</button>
          </div>
        </Form>
      </Formik>





            
            <h5>Already existing user ? <a href="/UserLogin">login</a></h5>

    </div>
</div>




    </div>
    </>
  )
}
