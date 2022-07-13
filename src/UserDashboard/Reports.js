
import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";

export default function Reports() {

  const { baseUrl } =useCounter()
  const [Data, setData] = useState([])
  const [allPoliicies , setallPoliicies] = useState([])

  useEffect(() => {
    
   axios
  .get(`${baseUrl}/payment_info`)
  .then((response) => {
    const userdaata = JSON.parse(localStorage.getItem("Userdata"))
    const dataa = response.data.filter((e)=>e.custid==userdaata.custid )
      console.log(dataa);
      setData(dataa)
  })
  .then((err) => {
    console.log(err);
  });


  axios
  .get(`${baseUrl}/policies`)
  .then((response) => {
    const userdaata = JSON.parse(localStorage.getItem("Userdata"))
    const dataa = response.data.filter((e)=>e.custid==userdaata.custid )
      console.log(dataa);
      setallPoliicies(dataa)
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


  function Deletepolicy(id){

     let Confirm = window.confirm("Are you sure?");
    if(Confirm){
      axios
      .delete(`${baseUrl}/policies/${id}`)
      .then((response) => {
        alert("Deleted Successfully")
        window.location.reload()
      })
      .then((err) => {
        console.log(err);
      });
    }
    }


    function DeletePayment(id){

        let Confirm = window.confirm("Are you sure?");
       if(Confirm){
         axios
         .delete(`${baseUrl}/payment_info/${id}`)
         .then((response) => {
           alert("Deleted Successfully")
           window.location.reload()
         })
         .then((err) => {
           console.log(err);
         });
       }
       }


       function PolicyDownload(id){
console.log(id);
        axios
         .get(`${baseUrl}/policies/${id}`)
         .then((response) => {
            console.log(response.data);
           const dataa =`
           Applied Policy  Receipt:-

           custid: ${response.data.custid} ,
           gst_amount: ${response.data.gst_amount}
           id: ${response.data.id} ,
           policyid: ${response.data.policyid} ,
           premium_amount: ${response.data.premium_amount}
           renew_date: ${response.data.renew_date} ,
           total_amount: ${response.data.total_amount} ,
           vehid: ${response.data.vehid} ,


           `
           console.log(dataa);
            var c = document.createElement("a");
        c.download = `policy_receipt.txt`;

        var t = new Blob([dataa], {
        type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();
         })

         .then((err) => {
           console.log(err);
         });


      
       }

       function PaymentDownload(id){
          axios
         .get(`${baseUrl}/payment_info/${id}`)
         .then((response) => {
           const dataa =`
           Payment Receipt:-

            custid: ${response.data.custid},
            paid_amount: ${response.data.paid_amount},
            pay_id: ${response.data.pay_id},
            payment_date: ${response.data.payment_date}",
            policyid: ${response.data.policyid}
           `
           console.log(dataa);
            var c = document.createElement("a");
        c.download = `payment_receipt.txt`;

        var t = new Blob([dataa], {
        type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();
         })

         .then((err) => {
           console.log(err);
         });
       
       }

  return (
    <div>
      
      <Menu name="Claim Status" />
            <div className="rightbody" >
            <div className="d-flex title" style={{alignItems:"center"}}>

               <img src="https://cdn2.iconfinder.com/data/icons/medical-services-20/520/828_Medical_Report_Claim-512.png" style={{ height:40 , paddingRight:10}} alt="" />
                <h1>All Reports</h1>
              </div>
              <br /><br /><br />

           
            



<h3>All Payments</h3>
   
<table class="table">
  <thead>
    <tr>
      <th scope="col">pay_id</th>
      <th scope="col">payment_date</th>
      <th scope="col">paid_amount</th>
     
      <th scope="col">policyid</th>
      <th scope="col">vehid</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.pay_id}</th>
      <td>{data.payment_date}</td>
      <td>{data.paid_amount}</td>
 
      <td>{data.policyid}</td>
      <td>{data.vehid}</td>
     
      <td><a onClick={()=>DeletePayment(data.pay_id)}> DELETE</a> |

      <a onClick={()=>PaymentDownload(data.pay_id)}> Download</a>
      </td>
    </tr>
            ))}
   
  </tbody>
</table>





<h3>All Applied Policies</h3>

<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">premium_amount</th>
      <th scope="col">gst_amount</th>
      <th scope="col">total_amount</th>
      <th scope="col">renew_date</th>
      <th scope="col">policyid</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
  {allPoliicies &&
            allPoliicies.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.id}</th>
      <td>{data.premium_amount}</td>
      <td>{data.gst_amount}</td>
      <td>{data.total_amount}</td>

       <td > {data.renew_date}</td>:

      <td>{data.policyid}</td>
     
      <td><a onClick={()=>Deletepolicy(data.id)}> DELETE</a>|

<a onClick={()=>PolicyDownload(data.id)}> Download</a>
</td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
