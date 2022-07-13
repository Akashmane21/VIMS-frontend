import React , { useState , useEffect} from 'react'
import axios from "axios";
import Navbar from '../comps/Navbar';
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function AdminLogin() {
    const { baseUrl} =useCounter()

    
    
    function AddUser(values){
        console.log(values.email);
        axios
        .get(`${baseUrl}/Admins/`)
        .then((response) => {
            const data = response.data.filter((e)=> e.email == values.email)

            if(data.length != 0){
                if(data[0].password != values.password){
                    alert("Password incorrect")
                }
                else{
                    alert("welcome")
                    localStorage.setItem("auth" , "true")
                    localStorage.setItem("type" , "Admin")
                    localStorage.setItem("Userdata" , JSON.stringify(data[0]))
                    window.location.replace("/Admin_Dashboard")
                }

            }
            else{
                alert("Invalid Credentials")
            }
         
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

<img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
<h1>Admin Login</h1>
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
       
            <div class="form-group ">
                <label for="Email" class="control-label">Email</label>
                <Field required={true} name="email" type="email"  class="form-control" />
            </div>
            
            <div class="form-group" style={{ marginRight:200 }}>
                <label for="Password" class="control-label">Password</label>
                <Field required={true} name="password" type="password"  class="form-control" />
            </div>

            
            <div class="form-group" style={{marginTop:40 , marginBottom:30 }}>
          <button type="submit" class="btn btn-primary form-control">Login</button>
          </div>
        </Form>
      </Formik>


      <h5>New User ? <a href="/AdminRegister">Register</a></h5>


    </div>
</div>




    </div>
    </>
  )
}
