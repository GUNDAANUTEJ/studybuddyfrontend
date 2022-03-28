import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/index.css'
import axios from 'axios'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';

const Index = () => {
    
    const { isAuthenticated, user, isLoading } = useAuth0();
    const navigator = useNavigate();

    useEffect(() => {
        const callMethod = async () => {
            const token = localStorage.getItem("token");
            await axios.post("https://study-buddy-bckend.herokuapp.com/auth", { token })
                .then((result) => {
                    if (result.data.success) {
                        navigator('/home');
                    }
                }).catch((err) => {
                    console.log(err);
                })
        }
        callMethod();
    }, [navigator])

    const getToken = async () => {
        let email = user.email;
//         console.log(email);
        await axios.post("https://study-buddy-bckend.herokuapp.com/getToken", { email })
            .then((result) => {
                if (result.data.success) {
                    localStorage.setItem("token", result.data.token);
                    navigator('/home');
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    if (isAuthenticated) {
        getToken();
    }
    
    return (
        !isLoading && (<>
            <div className="container">
                <h1 className="mt-5 py-5" style={{ background: "none", backdropFilter: "none", fontSize: "50px" }}>Bearcat Study Buddy</h1>
                <div className="d-flex justify-content-around">
                    <a href="/login"><button className="btn btn-success py-2 px-5">Login</button></a>
                    <a href="/signup"><button className="btn btn-danger py-2 px-5">SignUp</button></a>
                </div>
            </div>
            <Footer />
        </>)
    )
}

export default Index
