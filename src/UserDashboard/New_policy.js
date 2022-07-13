import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";

import { useCounter } from "../ContextDB/Context";
export default function New_policy() {
const { baseUrl} =useCounter()
    const [Data, setData] = useState([])
    
    useEffect(() => {

     axios
    .get(`${baseUrl}/Vehicles`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    }, [])

    function Submit(){
        const userdata = JSON.parse(localStorage.getItem("Userdata"))

        const data ={
            "regi_no": document.getElementById("regi_no").value,
            "veh_chassis_no": document.getElementById("veh_chassis_no").value,
            "veh_engine_no": document.getElementById("veh_engine_no").value,
            "purchase_year": parseInt(document.getElementById("purchase_year").value),
            "model": document.getElementById("model").value,
            "custid": userdata.custid
          }
          console.log(data);


         axios
         .post(`${baseUrl}/Vehicle_info`, data)
         .then((response) => {
          alert("Successfully Added")
         })
         .then((err) => {
           console.log(err);
         });
     }
  return (
    <div>
      
      <Menu name="New policy" />


            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://cdn3.vectorstock.com/i/1000x1000/71/42/insurance-policy-icon-vector-21237142.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>New Policy</h1>
</div>
<br /><br /><br />

           
   

    <div class="formgroup">
            <label for="model">model</label>
            <select id="model" class="form-control">
            {Data &&
            Data.map((data, key) => (
                <option value={data.model}>{data.vehicles_id} - {data.model}</option>
            ))}
            </select>
            </div>

    <div class="formgroup">
    <label for="Vehicle engine no." class="control-label">Vehicle engine no.</label>
    <input required id="veh_engine_no"  class="form-control" />
</div>

<div class="formgroup">
    <label for="Vehicle Chassis no." class="control-label">Vehicle Chassis no.</label>
    <input required id="veh_chassis_no"  class="form-control" />
</div>

<div class="formgroup">
    <label for="Registration number" class="control-label">Registration number</label>
    <input required id="regi_no"  class="form-control" />
</div>

<div class="formgroup">
    <label for="Year of purchase" class="control-label">Year of purchase</label>
    <input required id="purchase_year" type="month"  class="form-control" />
</div>

<div className="bthns">
    <a className='btn m-3' onClick={Submit}>
        Create Policy
    </a>
  
</div>


            </div>
    </div>
  )
}
