import React from 'react'
import Navbar from '../comps/Navbar'
import Menu from './Menu'

export default function User_Dashboard() {
  return (
    <div>
                  <Menu name="User Dashboard " />
           

            <div className="rightbody" >
                <h1>User Dashboard</h1>
                <div className="dash_blocks">
                 
                <a href="/New_policy">

                    <div className="dash_card">
                        <img src="https://cdn3.vectorstock.com/i/1000x1000/71/42/insurance-policy-icon-vector-21237142.jpg" alt="" />
                        <h5>New Policy</h5>
                    </div>
                </a>

                <a href="/Renew_policy">

                    <div className="dash_card">
                        <img src="https://thumbs.dreamstime.com/t/auto-renew-icon-d-illustration-vector-112887968.jpg" alt="" />
                        <h5>Renew</h5>
                    </div>
                </a>

<a href="/Payment">

                    <div className="dash_card">
                        <img src="https://tse3.mm.bing.net/th/id/OIP.t6kmiUn7cQ4NJGjHEPAOXwHaHa?pid=ImgDet&rs=1" alt="" />
                        <h5>Payment</h5>
                    </div>
</a>

                   


<a href="/Lodge_claim">

                    <div className="dash_card">
                        <img src="https://cdn2.iconfinder.com/data/icons/medical-services-20/520/828_Medical_Report_Claim-512.png" alt="" />
                        <h5>Lodge a claim</h5>
                    </div>
</a>

<a href="/Claim_status">


                    <div className="dash_card">
                        <img src="https://images.cdn4.stockunlimited.net/preview1300/reports-icon_1525734.jpg" alt="" />
                        <h5>CLAIM TRACK STATUS</h5>
                    </div>
</a>


<a href="/Reports">
                    <div className="dash_card">
                        <img src="https://images.cdn4.stockunlimited.net/preview1300/reports-icon_1525734.jpg" alt="" />
                        <h5>All Reports</h5>
                    </div>
</a>

                    
                </div>
            </div>
      

    </div>
  )
}
