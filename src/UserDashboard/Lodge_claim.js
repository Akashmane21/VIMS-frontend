import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Lodge_claim() {
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
   
        const claimdata = {
            "claim_amount":parseInt(document.getElementById("claim_amount").value),
            "claim_date": new Date(),
            "damage_des": document.getElementById("damage_des").value,
            "custid": custidd,
            "vehid": parseInt(document.getElementById("vehid").value),
            "policyid": policyid,
            "is_approved":"0"
          }

          console.log(claimdata);


          axios
          .post(`${baseUrl}/Claims`, claimdata)
          .then((response) => {
           alert("Claim Successfully ")
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


  return (
    <div>
       <Menu name="Lodge claim" />


      <div className="rightbody">
        <div className="d-flex title" style={{ alignItems: "center" }}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/medical-services-20/520/828_Medical_Report_Claim-512.png"
            style={{ height: 40, paddingRight: 10 }}
            alt=""
          />
          <h1>Lodge a Claim</h1>
        </div>
        <br />
        <br />
        <br />

            
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

            <div class="formgroup">
          <label for="Type of Damage" class="control-label">
            Claim Amount
          </label>
          <input required id="claim_amount" type="number" class="form-control" />
        </div>


        <div class="formgroup">
          <label for="Type of Damage" class="control-label">
            Type & Descreption  of Damage
          </label>
          <input required id="damage_des" class="form-control" />
        </div>

      

        <div className="bthns">
          <a className="btn m-3" onClick={Submit}>Submit</a>
          {/* <a className="btn m-3" href="/Claim_status">
            Track Status
          </a> */}
        </div>
      </div>
    </div>
  );
}
