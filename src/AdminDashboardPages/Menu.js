import React , {useEffect , useState} from 'react'
import './styles.css'
export default function Menu({name}) {
    const [namee, setnamee] = useState("")
    useEffect(() => {
        if(localStorage.getItem("auth")!=null){
           const userdata = JSON.parse(localStorage.getItem("Userdata"))
           setnamee(userdata.first_name)
        }
        else{
           window.location.replace("/")
        }
       }, [])
   
       function Logout(){
        
           localStorage.removeItem("auth")
           localStorage.removeItem("Userdata")
           alert("Logout Successfully")
           window.location.replace("/")
       }
  return (
    <header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container-fluid">
            {/* <a class="navbar-brand" href='/' style={{color:'#007fff'}}>Vehicle Insurance policy</a> */}
            <a class="navbar-brand" href='/Admin_Dashboard' style={{color:'#007fff'}}> Admin Dashboard  ></a>
           
            <div class="navbar-collapse collapse d-flex j" style={{display:"flex" , justifyContent:"space-between"}}>
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                        <a class="nav-link " >{name}</a>
                    </li>
                    
                </ul>
                <div>
                        <ul className='navbar-nav flex-grow-1'>


                   
                        <li class="nav-item">
                        <a class="nav-link ">{namee}</a>
                    </li> <li class="nav-item">
                        <a class="nav-link " onClick={Logout}>Logout</a>
                    </li>
                    
                    
                        </ul>
                    </div>
                   
                  
            </div>
        </div>
    </nav>
</header>
  )
}
