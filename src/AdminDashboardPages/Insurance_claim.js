import React from 'react'
import Menu from './Menu'

export default function Manage_sal_det() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://champaignil.gov/wp-content/uploads/2017/07/Claim-Button-HR-7-6-17.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Insurance claim settling</h1>
</div>
<br /><br /><br />

           
            
<div class="formgroup">
    <label htmlFor="Claim Requests">Claim Requests</label>
    <input  required id="req" class="form-control" />
    </div>

    <div class="formgroup">
    <label for="Upload Documents" class="control-label">Upload Documents</label>
    <input required id="doc" type="input" class="form-control" />
</div>



<div className="bthns">
    <a className='btn m-3'>
        Settle claim
    </a>
  
</div>


            </div>
    </div>
  )
}
