import React from 'react'
import Menu from './Menu'

export default function Payment() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

            <div className="d-flex title" style={{alignItems:"center"}}>

<img src="https://tse3.mm.bing.net/th/id/OIP.t6kmiUn7cQ4NJGjHEPAOXwHaHa?pid=ImgDet&rs=1" style={{ height:40 , paddingRight:10}} alt="" />
            <h1>Payment</h1>
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
    <label for="Type of Payment" class="control-label">Type of Payment</label>
    <input required id=""  class="form-control" />
</div>



<div className="bthns">
    <a className='btn m-3'>
        Pay
    </a>
  
</div>


            </div>
    </div>
  )
}
