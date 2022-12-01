import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";
import Login from "./login_component";
import SignUp from "./signup_component";
import  "./index.css";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      
      
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          
          <Route path="/home" element={<EmpListing />}></Route>
          <Route path="home/employee/create" element={<EmpCreate />}></Route>

          <Route path="/employee/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
