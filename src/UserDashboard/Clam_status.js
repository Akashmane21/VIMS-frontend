
import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Claim_Status() {
  const { baseUrl} =useCounter()
  const [Data, setData] = useState([])

  useEffect(() => {
    
   axios
  .get(`${baseUrl}/Claims`)
  .then((response) => {
    const userdaata = JSON.parse(localStorage.getItem("Userdata"))
    const dataa = response.data.filter((e)=>e.custid==userdaata.custid )
      console.log(dataa);
      setData(dataa)
  })
  .then((err) => {
    console.log(err);
  });

  }, [])

  function Delete(id){
  //  const result = confirm("Are you sure");
  //  alert(result)
   let Confirm = window.confirm("Are you sure?");
  if(Confirm){
    axios
    .delete(`${baseUrl}/Claims/${id}`)
    .then((response) => {
      alert("Deleted Successfully")
      window.location.reload()
    })
    .then((err) => {
      console.log(err);
    });
  }
  }
  return (
    <div>
      
      <Menu name="Claim Status" />
            <div className="rightbody" >
            <div className="d-flex title" style={{alignItems:"center"}}>

               <img src="https://cdn2.iconfinder.com/data/icons/medical-services-20/520/828_Medical_Report_Claim-512.png" style={{ height:40 , paddingRight:10}} alt="" />
                <h1>Claim Track Status</h1>
              </div>
              <br /><br /><br />

           
            




<table class="table">
  <thead>
    <tr>
      <th scope="col">claim_id</th>
      <th scope="col">claim_amount</th>
      <th scope="col">claim_date</th>
      <th scope="col">damage_des</th>
      <th scope="col">is_approved</th>
      <th scope="col">policyid</th>
      <th scope="col">vehid</th>
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
     
      <td><a onClick={()=>Delete(data.claim_id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
