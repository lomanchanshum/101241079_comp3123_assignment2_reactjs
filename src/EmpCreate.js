import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    
    const[first_name,firstNamechange]=useState("");
    const[last_name,lastNamechange]=useState("");
    const[email,emailchange]=useState("");
    const[gender,genderchange]=useState("");
    const[salary,salarychange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={first_name,last_name,email,gender,salary};
      

      fetch("http://localhost:5000/api/emp/employees/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        // console.log(res)
        navigate('/home');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input required value={first_name} onMouseDown={e=>valchange(true)} onChange={e=>firstNamechange(e.target.value)} className="form-control"></input>
                                        {first_name.length==0 && validation && <span className="text-danger">Enter the First name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input required value={last_name} onMouseDown={e=>valchange(true)} onChange={e=>lastNamechange(e.target.value)} className="form-control"></input>
                                        {last_name.length==0 && validation && <span className="text-danger">Enter the Last name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <input value={gender} onChange={e=>genderchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Salary</label>
                                            <input value={salary} onChange={e=>salarychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/home" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;