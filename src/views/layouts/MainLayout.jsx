import {Link, Outlet} from "react-router-dom";
import routes from "../../routes";

const MainLayout = () => {
    return (
        <div>
            <ul>
                <li><Link to={routes.web.dashboard}>Dashboard</Link></li>
                <li><Link to={routes.web.user.index}>User</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}

export default MainLayout