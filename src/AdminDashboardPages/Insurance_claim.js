import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Insurance_claim() {
  const { baseUrl} =useCounter()
  const [Data, setData] = useState([])

  useEffect(() => {
    
   axios
  .get(`${baseUrl}/Claims`)
  .then((response) => {
  
      setData(response.data)
  })
  .then((err) => {
    console.log(err);
  });



  }, [])


function Delete(id){
  let Confirm = window.confirm("Are you sure?");
  if(Confirm){
  const baseuRL = `${baseUrl}/Claims/`
         axios
         .delete(`${baseuRL}/${id}`)
         .then(() => {
          alert("Deleted Successfully")
     window.location.reload()

         });
        }

}

function Settle(id){
  axios
  .get(`${baseUrl}/Claims/${id}`)
  .then((response) => {
   
    const datta = {
      "claim_id": id,
      "claim_amount": response.data.claim_amount,
      "claim_date": response.data.claim_date,
      "damage_des": response.data.damage_des,
      "is_approved": "1",
      "custid": response.data.custid,
      "vehid": response.data.vehid,
      "policyid": response.data.policyid
    }

    const baseuRL = `${baseUrl}/Claims/`

    axios
    .put(`${baseuRL}${id}` , datta)
    .then(() => {
     alert("Claim Settled Successfully")
     window.location.reload()
    });


  })

  .then((err) => {
    console.log(err);
  });

 

}

  return (
    <div>
      
      <Menu name="Insurance claim" />
      


            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://champaignil.gov/wp-content/uploads/2017/07/Claim-Button-HR-7-6-17.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Insurance claim settling</h1>
</div>
<br /><br /><br />

           
            
<table class="table">
  <thead>
    <tr>
      <th scope="col">claim_id</th>
      <th scope="col">claim_amount</th>
      <th scope="col">claim_date</th>
      <th scope="col">damage_des</th>
      <th scope="col">Status</th>
      <th scope="col">policyid</th>
      <th scope="col">vehid</th>
      <th scope="col">customer ID</th>

      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.claim_id}</th>
      <td>{data.claim_amount}</td>
      <td>{data.claim_date}</td>
      <td>{data.damage_des}</td>
      {data.is_approved=="0" ?
       
       <td style={{color:"red"}}>Pending</td>:
       <td style={{color:"green"}}>Approved</td>
      
      }
      <td>{data.policyid}</td>
      <td>{data.vehid}</td>
      <td>{data.custid}</td>
     
      <td>
      <a className='btn' onClick={()=>Settle(data.claim_id)}>
        Settle claim
    </a> |
        <a className='btn' style={{backgroundColor:"orangered"}} onClick={()=>Delete(data.claim_id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>
<div className="bthns">
    
  
</div>


            </div>
    </div>
  )
}
