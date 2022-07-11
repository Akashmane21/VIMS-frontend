import React from 'react'
import './styles.css'
export default function Menu() {
  return (
    <div>
       <div className="all">
            <img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />

            <div className="menuitems">
            <div className="registertitle cardd">

<img src="https://st4.depositphotos.com/27867620/30419/v/450/depositphotos_304191084-stock-illustration-propose-web-icon-simple-design.jpg" alt="" />
<h6>Home </h6>
    </div>

            <a href="/Admin_Dashboard">

            <div className="registertitle cardd">

            <img src="https://thumbs.dreamstime.com/b/dashboard-admin-monitor-monitoring-processing-flat-color-icon-vector-148914658.jpg" alt="" />
            <h6>Dashboard</h6>
                </div>
            </a>

              

                <div className="registertitle cardd">

            <img src="https://static.vecteezy.com/system/resources/previews/000/501/314/original/question-icon-design-vector.jpg" alt="" />
            <h6 style={{ paddingRight:20}}>Questions </h6>
                </div>

            </div>
        </div>
    </div>
  )
}
