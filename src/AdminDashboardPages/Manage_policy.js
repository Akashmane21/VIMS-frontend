import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Manage_emp() {
    const { baseUrl} =useCounter()
    const [Data, setData] = useState([])
    useEffect(() => {
     axios
    .get(`${baseUrl}/AllPolicies`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])

    function Delete (id){
      let Confirm = window.confirm("Are you sure?");
      if(Confirm){
        const baseURL = `${baseUrl}/AllPolicies/`
         axios
         .delete(`${baseURL}${id}`)
         .then(() => {
          alert("Deleted Successfully")
         });
        }
     }
 
     function Submit(){
        const data ={
            "premium_amount": parseInt(document.getElementById("premium_amount").value),
            "gst_amount":parseInt(document.getElementById("gst_amount").value),
            "total_amount":parseInt(document.getElementById("total_amount").value),
            "duration":document.getElementById("duration").value,
        }
         axios
         .post(`${baseUrl}/AllPolicies`, data)
         .then((response) => {
          alert("Successfully Added")
          window.location.reload()
         })
         .then((err) => {
           console.log(err);
         });
     }

  return (
    <div>
      
      <Menu name="Manage Policy Plans" />




            <div className="rightbody" >
                <div className="d-flex title" style={{alignItems:"center"}}>

                <img src="https://th.bing.com/th/id/R.97077bb0444bf1413d4ca1a5def0bcc5?rik=5yRhR7ZiyKSHmQ&riu=http%3a%2f%2fwww.nationalpoliceandfirelaborblog.com%2fwp-content%2fuploads%2f2013%2f07%2fpolicies-icon.png&ehk=ANTAwX9dS2DYuAuY%2byIMA5gSoCaXH7BUsb7mSAU0Feo%3d&risl=&pid=ImgRaw&r=0" style={{ height:40 }} alt="" />
            <h1>Manage Policy Plans</h1>
                </div>

                <br />




<div className="d-flex">


           

        <div class="formgroup">
        <label htmlFor="duration">duration in Year </label>
          <input required={true} id="duration" class="form-control" type="text" />
          </div>

          <div class="formgroup">
        <label htmlFor="premium_amount">premium_amount </label>
          <input required={true} id="premium_amount" class="form-control" type="number" />
          </div>

          <div class="formgroup">
        <label htmlFor="gst_amount">gst_amount</label>
          <input required={true} id="gst_amount" class="form-control" type="number" />
          </div>

          <div class="formgroup">
        <label htmlFor="total_amount">total_amount </label>
          <input required={true} id="total_amount" class="form-control" type="number" />
          </div>
          
            <div class="formgroup">
          <button class="btn btn-primary" onClick={Submit}>Add</button>
          </div>
          </div>


            <table class="table">
  <thead>
    <tr>
      <th scope="col">Policy id</th>
      <th scope="col">premium_amount</th>
      <th scope="col">gst_amount</th>
      <th scope="col">total_amount</th>
      <th scope="col">duration</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.policyid}</th>
      <td>{data.premium_amount}</td>
      <td>{data.gst_amount}</td>
      <td>{data.total_amount}</td>
      <td>{data.duration}</td>
     
      <td><a href='' onClick={()=>Delete(data.policyid)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            


            </div>
    </div>
  )
}
