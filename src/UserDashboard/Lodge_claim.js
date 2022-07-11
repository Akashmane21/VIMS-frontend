import React from 'react'
import Menu from './Menu'

export default function Lodge_claim() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://cdn2.iconfinder.com/data/icons/medical-services-20/520/828_Medical_Report_Claim-512.png" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Lodge a Claim</h1>
</div>
<br /><br /><br />

           
            


    <div class="formgroup">
    <label for="Policy id" class="control-label">Policy id</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Vehicle id" class="control-label">Vehicle id</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Type of Damage" class="control-label">Type of Damage</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Doc" class="control-label">Upload Documents for Damage Proof</label>
    <input required id="" type="file"  class="form-control" />
</div>



<div className="bthns">
    <a className='btn m-3'>
        Submit
    </a>
    <a className='btn m-3' href='/Claim_status'>
        Track Status
    </a>
  
</div>


            </div>
    </div>
  )
}
