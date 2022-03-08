import { useEffect } from "react"
import axios from 'axios'
import './notification.css'
import notificationData from "./notificationData"
import { useNavigate } from "react-router-dom"

const Notification = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const callBack = async () => {
            const token = localStorage.getItem("token");

            await axios.post("https://study-buddy-bckend.herokuapp.com/auth", { token })
                .then((result) => {
                    if (!result.data)
                        navigate('/');
                })
        }
        callBack();
    }, [navigate]);

    return (
        <>
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
        </>
    )
}

export default Notification
