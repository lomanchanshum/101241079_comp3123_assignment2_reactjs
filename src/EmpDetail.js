import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();


    const [empdata, empdatachange] = useState({});
    // navigate('/home');
   

    useEffect(() => {
        fetch("http://localhost:5000/api/emp/employees/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
            
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Create</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        {/* ({empdata._id}) */}
                        <h2>The Employee name is : <b>{empdata.first_name}</b>  </h2>
                        <h3>Contact Details</h3>
                        <h5>Last Name is : {empdata.last_name}</h5>
                        <h5>Email is : {empdata.email}</h5>
                        <h5>Salary is : {empdata.salary}</h5>
                        <h5>Gender is : {empdata.gender}</h5>
                        <Link className="btn btn-danger" to="/home">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;