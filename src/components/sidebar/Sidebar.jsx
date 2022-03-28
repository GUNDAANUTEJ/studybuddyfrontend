import { NavLink } from "react-router-dom"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SidebarData from './SidebarData'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import "./sidebar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {

    const { logout } = useAuth0();    
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );
    
    const logOut = () => {
        localStorage.removeItem('token');
        logout({ returnTo: window.location.origin });
    }

    return (
        <>
            <div className="sidebar">
                <div className="d-flex flex-column flex-shrink-0 bg-light px-md-2">
                    <span className="d-block pt-3 link-dark text-decoration-none" >
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 100 }}
                            overlay={renderTooltip("Studdy buddy")}>
                                <p className="fw-bolder text-center" style={{ textShadow: "1px 1px 10px lightblue" }}>Studdy Buddy</p>
                        </OverlayTrigger>                                
                    </span>
                    <hr className="bg-gradient m-0" />
                    <ul className="nav flex-column text-center">
                        {
                            SidebarData.map((data,index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <OverlayTrigger
                                            placement="right"
                                            overlay={renderTooltip(data.title)}>
                                            <NavLink to={data.link} className="nav-link py-3 border-bottom text-black">
                                                <i className={data.icon} />
                                            </NavLink>
                                        </OverlayTrigger>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item">
                            <OverlayTrigger
                                placement="right"
                                overlay={renderTooltip("Logout")}>
                                <a onClick={logOut} className="logout nav-link py-3 border-bottom text-black">
                                    <i className="fas fa-sign-out" />
                                </a>
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default Sidebar
