import { useEffect } from "react"
import axios from 'axios'
import './dashboard/dashboard.css'
import Sidebar from "./sidebar/Sidebar"
import Course from './courses/Course'
import Notification from './notification/notification'
// import DataFetching from './DataFetching'
import { Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const callBack = async () => {
            await axios.get("/dashboard")
                .then((result) => {
                    if (!result.data)
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