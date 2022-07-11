import React from 'react'
import Menu from './Menu'

export default function Claim_Status() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://cdn2.iconfinder.com/data/icons/medical-services-20/520/828_Medical_Report_Claim-512.png" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Claim Track Status</h1>
</div>
<br /><br /><br />

           
            


    <div class="formgroup">
    <label for="Policy id" class="control-label">Policy id</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Claim id" class="control-label">Claim id</label>
    <input required id=""  class="form-control" />
</div>




<div className="bthns">
    <a className='btn m-3'>
        Track
    </a>
  
</div>


            </div>
    </div>
  )
}
