import { useEffect } from "react"
import axios from 'axios'
import './dashboard/dashboard.css'
import Sidebar from "./sidebar/Sidebar"
import Course from './courses/Course'
import Notification from './notification/notification'
import { Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const callBack = async () => {
            const token = localStorage.getItem('token');
            await axios.post("https://study-buddy-bckend.herokuapp.com/auth", { token })
                .then((result) => {
                    if (!result.data.success)
                        navigate('/')
                })
        }
        callBack();
    }, [navigate]);

    return (
        <>
            <div className="contain">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route exact path="/course" element={<Course />} />
                    <Route exact path="/notification" element={<Notification />} />
                </Routes>
            </div>
        </>
    );
}

export default Home;
