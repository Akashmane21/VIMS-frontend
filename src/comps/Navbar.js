import React , { useState , useEffect} from 'react'

export default function Navbar() {


    const [userdata, setuserdata] = useState([])
    const [auth, setAuth] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)

    const [namee, setnamee] = useState("")
    useEffect(() => {
        if(localStorage.getItem("auth")!=null){
           const userdata = JSON.parse(localStorage.getItem("Userdata"))
           setnamee(userdata.first_name)
        }
       
       }, [])
   
       function Logout(){
           localStorage.removeItem("auth")
           localStorage.removeItem("Userdata")
           window.location.replace("/")
       }
    
    
  return (
    <div> 
        <header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container-fluid">
            <a class="navbar-brand" href='/' style={{color:'#007fff'}}>Vehicle Insurance policy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse d-flex j" style={{display:"flex" , justifyContent:"space-between"}}>
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                        <a class="nav-link " href='/'>Home</a>
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

</div>
  )
}
