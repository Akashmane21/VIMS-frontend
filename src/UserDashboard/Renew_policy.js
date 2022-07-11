import React from 'react'
import Menu from './Menu'

export default function Renew_policy() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://thumbs.dreamstime.com/t/auto-renew-icon-d-illustration-vector-112887968.jpg" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Renew Policy</h1>
</div>
<br /><br /><br />

           
            
<div class="formgroup">
    <label htmlFor="Customer id">Customer id</label>
    <input  required id="" class="form-control" />
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
    <label for="Vehicle engine / chassis no." class="control-label">Vehicle engine / chassis no.</label>
    <input required id=""  class="form-control" />
</div>



<div className="bthns">
    <a className='btn m-3'>
        Renew Policy
    </a>
  
</div>


            </div>
    </div>
  )
}
