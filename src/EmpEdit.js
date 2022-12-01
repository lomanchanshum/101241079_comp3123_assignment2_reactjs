import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/api/emp/employees/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp._id);
            fistNameChange(resp.first_name);
            lastNameChange(resp.last_name);
            emailChange(resp.email);
            genderChange(resp.gender);
            salaryChange(resp.salary);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[first_name,fistNameChange]=useState("");
    const[email,emailChange]=useState("");
    const[last_name,lastNameChange]=useState("");
    const[gender,genderChange]=useState("");
    const[salary,salaryChange]=useState("");


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,first_name,last_name,email,gender,salary};
      

      fetch("http://localhost:5000/api/emp/employees/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
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
                            <h2>Employee Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input required value={first_name}  onChange={e=>fistNameChange(e.target.value)} className="form-control"></input>
                                    {first_name.length==0 &&  <span className="text-danger">Enter the First name</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input required value={last_name}  onChange={e=>lastNameChange(e.target.value)} className="form-control"></input>
                                    {last_name.length==0 &&  <span className="text-danger">Enter the Last name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input value={gender} onChange={e=>genderChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>salary</label>
                                        <input value={salary} onChange={e=>salaryChange(e.target.value)} className="form-control"></input>
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
 
export default EmpEdit;