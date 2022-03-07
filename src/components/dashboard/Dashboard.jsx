import { useEffect } from "react"
import axios from 'axios'
import './dashboard.css'
import DataFetching from './DataFetching'
import {  useNavigate } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate();

//     useEffect(() => {
//         const callBack = async () => {
//             await axios.get("https://study-buddy-bckend.herokuapp.com/dashboard")
//                 .then((result) => {
//                     if (!result.data)
//                         navigate('/')
//                 })
//         }
//         callBack();
//     }, [navigate]);

    return (
        <>
            <div className="dashboard-view">
                <DataFetching />
            </div>
        </>
    )
}

export default Dashboard
