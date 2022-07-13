import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";

import { useCounter } from "../ContextDB/Context";
export default function Renew_policy() {
    const { baseUrl} =useCounter()

    const [vehicles, setvehicles] = useState([])
    const [policies, setpolicies] = useState([])
    const [custidd, setcustidd] = useState("")
    const [chassis_no, setchassis_no] = useState("")


const [plan, setplan] = useState(null)

    useEffect(() => {
     axios
    .get(`${baseUrl}/Vehicle_info`)
    .then((response) => {
        const userdata = JSON.parse(localStorage.getItem("Userdata"))
        setcustidd(userdata.custid)
        const dataa = response.data.filter((e)=>e.custid==userdata.custid )
        console.log(dataa);
        setvehicles(dataa)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/policies`)
    .then((response) => {
        const userdaata = JSON.parse(localStorage.getItem("Userdata"))
        const dataa = response.data.filter((e)=>e.custid==userdaata.custid )

        console.log(response.data);
        setpolicies(dataa)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])



    function Submit(){
        const userdata = JSON.parse(localStorage.getItem("Userdata"))
        const policyid = parseInt(document.getElementById("policyid").value)

        axios
        .get(`${baseUrl}/policies/${policyid}`)
        .then((response) => {
            console.log(response.data);
        //     const duration =parseInt(response.data.duration)
        //     const now = new Date();

        // // 2 years and 30 days later from now
        //     const later = new Date(now.getFullYear() + duration, now.getMonth(), now.getDate() );
        //     alert("Next Renew date will be : " + later.toISOString())
        //     const datee =  later.toISOString()
        
            const renew_policy = {
                "initial_policy_Id": policyid,
                "renew_amount": response.data.total_amount,
                "gst_amount": response.data.gst_amount,
                "total_amount": response.data.total_amount,
                "next_renew_date": response.data.renew_date,
                "vehid": parseInt(document.getElementById("vehid").value),
                "custid": custidd
              }
              console.log(renew_policy);
              axios
              .post(`${baseUrl}/renew_policy`, renew_policy)
              .then((response) => {
               alert("Policy Renewed Successfully ")
               console.log(response.data);
              
     
              })
              .then((err) => {
                console.log(err);
              });
        })
        .then((err) => {
          console.log(err);
        });


     
          
        
            
         


       

       


     }


     function Load(){
       const idd=  parseInt(document.getElementById("vehid").value)
        axios
        .get(`${baseUrl}/Vehicle_info/${idd}`)
        .then((response) => {
            console.log(response.data.veh_engine_no)
            setchassis_no(response.data.veh_engine_no)
        })
        .then((err) => {
          console.log(err);
        });
     }





  return (
    <div>
      
      <Menu name="Renew policy" />


            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://thumbs.dreamstime.com/t/auto-renew-icon-d-illustration-vector-112887968.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Renew Policy</h1>
</div>
<br /><br /><br />

           
            
<div class="formgroup">
    <label htmlFor="Customer id">Customer id</label>
    <input  required id="" class="form-control" value={custidd} disabled={true} />
    </div>

   

<div class="formgroup">
            <label for="model">Policy id</label>
            <select id="policyid" class="form-control">
            {policies &&
            policies.map((data, key) => (
                <option value={data.id}>id: {data.id} - Total Amount : {data.total_amount} ,   {data.duration} years</option>
            ))}
            </select>
            </div>



<div class="formgroup">
            <label for="model">Vehicle id</label>
            <select id="vehid" class="form-control">
            {vehicles &&
            vehicles.map((data, key) => (
                <option value={data.vehid}>{data.vehid} - {data.model}</option>
            ))}
            </select>
            </div>

            <div className="bthns">
    <a className='btn m-3' onClick={Load}>
        Get vehicle details
    </a>
  
</div>


<div class="formgroup">
    <label for="Vehicle engine / chassis no." class="control-label">Vehicle engine / chassis no.</label>
    <input required id=""  class="form-control" value={chassis_no} disabled={true} />
</div>



<div className="bthns">
    <a className='btn m-3' onClick={Submit}>
        Renew Policy
    </a>
  
</div>


            </div>
    </div>
  )
}
