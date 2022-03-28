import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
import { Link, useNavigate } from 'react-router-dom'
import valid from 'validator'
import { useState } from 'react'
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")

    const validation = async (event) => {
        event.preventDefault()

        if (!valid.isEmail(Email) && !valid.isStrongPassword(Pass) && !(Pass.length >= 8)) {
            alert('enter valid email or strong password!!!')
        } else {
            const email = Email
            const password = Pass
            await fetch("https://study-buddy-bckend.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            }).then(async (data) => {
                return await data.json();
            }).then((data) => {
                if (data.success) {
                    localStorage.setItem("token", data.token);
                    navigate("/home");
                } else {
                    window.alert(data.error)
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <form method="post" className="login-form mb-2" onSubmit={validation}>
                <h1 className="my-4 pb-2">Login</h1>
                <div className="mb-3 mx-3">
                    <label htmlFor="username" className="form-label">Username :</label>
                    <input type="email" name="username" id="username" className="form-control" onChange={(event) => setEmail(event.target.value)} placeholder="enter your email" required />
                </div>
                <div className="mb-3 mx-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={(event) => setPass(event.target.value)} required />
                    <div id="passwordHelp" className="form-text" style={{ fontSize: "13px" }}>Password must contain at least 8 characters.</div>
                </div>
                <div className="mb-3 mx-3">
                    <button type="submit" className="btn btn-success fs-6 form-control">Submit</button>
                </div>
                <div className="text-center">
                    <h6 className="text-white">New user ! <Link to="/signup" className="text-decoration-none">SignUp</Link></h6>
                </div>
            </form>
            <div className="d-flex justify-content-center">
                <button onClick={() => loginWithRedirect()} className="btn py-1 px-5 text-white" style={{ backgroundColor: "#394b59", boxShadow: "0px 3px 5px black" }}>Login By Auth0</button>
            </div>
            <Footer />
        </>
    )
}

export default Login
