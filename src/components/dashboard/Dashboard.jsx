import { useEffect } from "react"
import { useHistory } from "react-router"
import axios from 'axios'
import './dashboard.css'
import Sidebar from "../sidebar/Sidebar"
import DataFetching from './DataFetching'

const Dashboard = () => {

    const history = useHistory()

    useEffect(() => {
        const callBack = async () => {
            await axios.get("/dashboard")
                .then((result) => {
                    if (!result.data)
                        history.push('/')
                })
        }
        callBack();
    }, [history]);

    return (
        <>
            <div className="contain">
                <Sidebar />
                <div className="dashboard-view">
                    <DataFetching />
                </div>
            </div>
        </>
    )
}

export default Dashboard