import React from 'react'
import Menu from './Menu'

export default function Manage_emp() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <div className="d-flex title" style={{alignItems:"center"}}>

                <img src="https://th.bing.com/th/id/R.97077bb0444bf1413d4ca1a5def0bcc5?rik=5yRhR7ZiyKSHmQ&riu=http%3a%2f%2fwww.nationalpoliceandfirelaborblog.com%2fwp-content%2fuploads%2f2013%2f07%2fpolicies-icon.png&ehk=ANTAwX9dS2DYuAuY%2byIMA5gSoCaXH7BUsb7mSAU0Feo%3d&risl=&pid=ImgRaw&r=0" style={{ height:40 }} alt="" />
            <h1>Manage Policy Plans</h1>
                </div>

                <br /><br /><br />

           
            
            <div class="formgroup">
                <label htmlFor="Type of policy">Type of policy</label>
                <input  required id="PolicyType" class="form-control" />
                </div>

                <div class="formgroup">
                <label for="Policy plan details" class="control-label">Policy plan details</label>
            </div>

            <div className="bthns">
                <a className='btn m-3'>
                    Add
                </a>
                <a href='Update_sal_det' className='btn m-3'>
                    Edit
                </a>
                <a className='btn m-3'>
                    Delete
                </a>
            </div>



            </div>
    </div>
  )
}
