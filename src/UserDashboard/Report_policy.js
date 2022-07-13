import React from 'react'
import Menu from './Menu'

export default function Report_policy() {
  return (
    <div>
<Menu name="Report policy" />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://images.cdn4.stockunlimited.net/preview1300/reports-icon_1525734.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Report of insurance policy </h1>
</div>
<br /><br /><br />

           
            

<div class="formgroup">
    <label for="Customer id" class="control-label">Customer id</label>
    <input required id=""  class="form-control" />
</div>

    <div class="formgroup">
    <label for="Policy id" class="control-label">Policy id</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Vehicle id" class="control-label">Vehicle id</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Report" class="control-label">Report : </label>
    <a href=""> View</a>
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
