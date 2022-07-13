import React from 'react'
import Navbar from '../comps/Navbar'
import Menu from './Menu'

export default function Admin_Dashboard() {
  return (
    <div>
                  <Navbar />
           

            <div className="rightbody" >
                <h1>Admin Dashboard</h1>
                <div className="dash_blocks">
                    <a href="/Manage_Policy">

                    <div className="dash_card">
                        <img src="https://th.bing.com/th/id/R.97077bb0444bf1413d4ca1a5def0bcc5?rik=5yRhR7ZiyKSHmQ&riu=http%3a%2f%2fwww.nationalpoliceandfirelaborblog.com%2fwp-content%2fuploads%2f2013%2f07%2fpolicies-icon.png&ehk=ANTAwX9dS2DYuAuY%2byIMA5gSoCaXH7BUsb7mSAU0Feo%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <h5>Manage Policies</h5>
                    </div>
                    </a>

                    <a href="/Insurance_claim">
                    <div className="dash_card">
                        <img src="https://champaignil.gov/wp-content/uploads/2017/07/Claim-Button-HR-7-6-17.jpg" alt="" />
                        <h5>Insurance claim settling</h5>
                    </div>
                    </a>

                    <a href="/Add_Vehicle">
                    <div className="dash_card">
                        <img src="https://thumbs.dreamstime.com/b/car-sharing-logo-vector-city-micro-pink-eco-vehicle-icon-isolated-white-background-cartoon-illustration-urban-ecological-162310980.jpg" alt="" />
                        <h5>Add Vehicle Models</h5>
                    </div>
                    </a>

                    {/* <a href="/Add_Policies">
                    <div className="dash_card">
                        <img src="https://champaignil.gov/wp-content/uploads/2017/07/Claim-Button-HR-7-6-17.jpg" alt="" />
                        <h5>Add Policies</h5>
                    </div>
                    </a> */}

                    
                </div>
            </div>
      

    </div>
  )
}
