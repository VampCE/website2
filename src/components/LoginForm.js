import React,{useState} from 'react'
import './LoginForm.css'
import {FaUser, FaLock} from "react-icons/fa"
import {Dropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom";



function LoginForm(){
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        // If login is successful, redirect to the /LocateLost route
        navigate('/LocateLost');
    }

    return(
        <div  className="login">
            <div className="login-container">
                <div className="login-wrapper">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign In</h1>

                        <Dropdown className="drop-down">
                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className={"drop-down-basic"}>
                                {selectedItem || "Select Corporation"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={"menu"}>
                                <Dropdown.Item onClick={() => handleItemClick("Kadir Has University")}>Kadir Has University</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleItemClick("Corporation 2")}>Corporation 2</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleItemClick("Corporation 3")}>Corporation 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        <div className="input-box">
                            <input type="tex" placeholder='Username' required/>
                            <FaUser className='icon'/>

                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required/>
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forgot">
                            <label><input type={"checkbox"}/> Remember me</label>
                        </div>
                        <button type="submi">Login</button>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginForm;