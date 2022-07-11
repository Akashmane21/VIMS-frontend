import React from 'react'
import Menu from './Menu'

export default function New_policy() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://cdn3.vectorstock.com/i/1000x1000/71/42/insurance-policy-icon-vector-21237142.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>New Policy</h1>
</div>
<br /><br /><br />

           
            
<div class="formgroup">
    <label htmlFor="Vehicle Model">Vehicle Model</label>
    <input  required id="" class="form-control" />
    </div>

    <div class="formgroup">
    <label for="Vehicle engine no." class="control-label">Vehicle engine no.</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Vehicle Chassis no." class="control-label">Vehicle Chassis no.</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Registration number" class="control-label">Registration number</label>
    <input required id=""  class="form-control" />
</div>

<div class="formgroup">
    <label for="Year of purchase" class="control-label">Year of purchase</label>
    <input required id="" type="month"  class="form-control" />
</div>

<div className="bthns">
    <a className='btn m-3'>
        Create Policy
    </a>
  
</div>


            </div>
    </div>
  )
}
