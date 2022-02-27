import { NavLink } from "react-router-dom"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SidebarData from './SidebarData'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import "./sidebar.css"

const Sidebar = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );

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
                                            <NavLink exact to={data.link} activeClassName="active text-green" className="nav-link py-3 border-bottom text-black">
                                                <i className={data.icon} />
                                            </NavLink>
                                        </OverlayTrigger>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>


        </>
    )
}

export default Sidebar