import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
export default function Add_Vehicle() {
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

    function Delete (id){
      let Confirm = window.confirm("Are you sure?");
      if(Confirm){
        const baseuRL = `${baseUrl}/Vehicles/`
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
         .post(`${baseUrl}/Vehicles`, data)
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
      
     <Menu name="Add Vehicle details" />


            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://thumbs.dreamstime.com/b/car-sharing-logo-vector-city-micro-pink-eco-vehicle-icon-isolated-white-background-cartoon-illustration-urban-ecological-162310980.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Add Vehicle details</h1>
</div>
<br /><br /><br />

<div className="d-flex">

        <div class="formgroup">
        <label htmlFor="model">model Name</label>
          <input required={true} id="model" class="form-control" type="text" />
          </div>
          
            <div class="formgroup">
          <button class="btn btn-primary" onClick={Submit}>Submit</button>
          </div>
          </div>
        


            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Model Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.vehicles_id}</th>
      <td>{data.model}</td>
     
      <td><a href='' onClick={()=>Delete(data.vehicles_id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>



            </div>
    </div>
  )
}
