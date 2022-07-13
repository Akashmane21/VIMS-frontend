import logo from './logo.svg';
import './App.css';
import Navbar from './comps/Navbar';
import { useCounter } from "./ContextDB/Context";

function App() {
  
  const { baseUrl} =useCounter()

  return (
    <div className="App">
      <Navbar />

      {/* <h1>Vehicle Insurance  Management System </h1> */}
      <header className="App-header">
        <div className="blocks">
          <a href="/UserRegister">

          <div className="emp block">
              <img src="https://static.vecteezy.com/system/resources/previews/000/350/083/original/leader-of-group-vector-icon.jpg" alt="Employee image" />
              <h5>User</h5>
          </div>
          </a>
          <a href="/AdminRegister">

          <div className="admin block">
               <img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
              <h5>Admin </h5>
          </div>
              </a>
        </div>
      </header>
    </div>
  );
}

export default App;
