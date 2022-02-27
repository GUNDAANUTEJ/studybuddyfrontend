import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import axios from 'axios'
import './notification.css'
import Sidebar from "../sidebar/Sidebar"
import notificationData from "./notificationData"

const Notification = () => {

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
                <div className="notification-view" style={{ textAlign: "left" }}>
                    {
                        notificationData.map((data, index) => {
                            return (
                                <div key={index} >
                                    <div className="info" >
                                        <span className="heading">{data.from}</span>
                                        <p className="message text-secondary">{data.message}</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Notification