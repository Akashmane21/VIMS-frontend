import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Add_Policies() {
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
        const baseuRL = `${baseUrl}/AllPolicies/`
         axios
         .delete(`${baseuRL}${id}`)
         .then(() => {
          alert("Deleted Successfully")
         });
        }
     }
 
     function Submit(){
        const data ={
            "model":document.getElementById("model").value
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
      
      <Menu name="Add Policies" />




            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://champaignil.gov/wp-content/uploads/2017/07/Claim-Button-HR-7-6-17.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Insurance claim settling</h1>
</div>
<br /><br /><br />

        <div class="formgroup">
        <label htmlFor="duration">duration</label>
          <input required={true} id="duration" class="form-control" type="text" />
          </div>

          <div class="formgroup">
        <label htmlFor="premium_amount">premium_amount </label>
          <input required={true} id="premium_amount" class="form-control" type="text" />
          </div>

          <div class="formgroup">
        <label htmlFor="gst_amount">gst_amount</label>
          <input required={true} id="gst_amount" class="form-control" type="text" />
          </div>

          <div class="formgroup">
        <label htmlFor="total_amount">total_amount </label>
          <input required={true} id="total_amount" class="form-control" type="text" />
          </div>
          
            <div class="formgroup">
          <button class="btn btn-primary" onClick={Submit}>Submit</button>
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
