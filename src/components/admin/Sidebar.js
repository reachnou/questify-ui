import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

function Sidebar() {

    const handleLogout = () => {
        localStorage.clear("isLogin");
        localStorage.clear("user");
    }

    return (
        <div>
            <div class="container-fluid bg-light vh-100">
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">
                        <Link to={ROUTES.ADMIN_DASHBOARD}>Home</Link>
                    </li>
                    <li class="list-group-item">
                        <Link to={ROUTES.TOPIC}>Topic</Link>
                    </li>
                    <li class="list-group-item">
                        <Link to={ROUTES.CHALLENGE_IN_ADMIN}>Challenge</Link>
                    </li>
                    <li class="list-group-item">
                        <Link to={ROUTES.USER}>User</Link>
                    </li>
                    <li class="list-group-item" onClick={handleLogout}>
                        <Link to={ROUTES.WELCOME}><span className="text-danger">Logout</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar