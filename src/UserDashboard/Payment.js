import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Payment() {
    const { baseUrl} =useCounter()

    const [vehicles, setvehicles] = useState([])
    const [policies, setpolicies] = useState([])
    const [custidd, setcustidd] = useState("")
    const [renew_date, setrenew_date] = useState("")
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
    .get(`${baseUrl}/AllPolicies`)
    .then((response) => {
        console.log(response.data);
        setpolicies(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])



    function Submit(){
        const userdata = JSON.parse(localStorage.getItem("Userdata"))

        const Policy ={
            "premium_amount": plan.premium_amount,
            "gst_amount": plan.gst_amount,
            "total_amount": plan.total_amount,
            "renew_date": renew_date,
            "policyid": plan.policyid,
            "custid": custidd,
            "vehid":parseInt(document.getElementById("vehid").value)
          }

          
        
            
         


         axios
         .post(`${baseUrl}/policies`, Policy)
         .then((response) => {
          alert("Successfully Added")
          console.log(response.data);
          const payment ={
            "payment_date": new Date(),
            "paid_amount": plan.total_amount,
            "custid": custidd,
            "policyid": response.data.id
          }
          axios
          .post(`${baseUrl}/payment_info`, payment)
          .then((response) => {
           alert("Payment successfully")
          })
          .then((err) => {
            console.log(err);
          });


         })
         .then((err) => {
           console.log(err);
         });

       


     }


     function Plan(id){
        axios
        .get(`${baseUrl}/AllPolicies/${id}`)
        .then((response) => {
            setplan(response.data)
const duration =parseInt(response.data.duration)
            const now = new Date();

        // 2 years and 30 days later from now
        const later = new Date(now.getFullYear() + duration, now.getMonth(), now.getDate() );
        setrenew_date(later.toISOString())
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

<img src="https://tse3.mm.bing.net/th/id/OIP.t6kmiUn7cQ4NJGjHEPAOXwHaHa?pid=ImgDet&rs=1" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Payment</h1>
</div>
<br /><br /><br />

           
            
<div class="formgroup">
    <label htmlFor="Customer id">Customer id</label>
    <input  required id="" class="form-control" value={custidd} disabled={true} />
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


{/* <div class="formgroup">
            <label for="model">Policy id</label>
            <select id="policyid" class="form-control">
            {policies &&
            policies.map((data, key) => (
                <option value={data.total_amount}>id: {data.policyid} - Total Amount : {data.total_amount} ,   {data.duration} years</option>
            ))}
            </select>
            </div> */}
            
            Choose one Policy from below list:
<div className="poly">

            {policies &&
            policies.map((data, key) => (
                <div className="polyblock" onClick={()=> Plan(data.policyid)}>
                    <h4>id: {data.policyid} - Total Amount : {data.total_amount} , gst_amount : {data.gst_amount} , 
                    premium_amount : {data.premium_amount}  , Duration :  {data.duration} years</h4>
                </div>
            ))}
            </div>

                Selected Plan :
            {plan && 
            <>
                    <h4>id: {plan.policyid} - Total Amount : {plan.total_amount} , gst_amount : {plan.gst_amount} , 
                    premium_amount : {plan.premium_amount}  , Duration :  {plan.duration} years</h4>
            <h3>Renew Date : {renew_date}</h3>
            </>
            }



<div className="bthns">
    <a className='btn m-3' onClick={Submit}>
        Submit
    </a>
  
</div>


            </div>
    </div>
  )
}
