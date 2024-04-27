import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { ROLES } from "../constants/roles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { login } from "../api/auth";

function Signin() {

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const body = {};
        for (const [key, value] of form.entries()) {
            body[key] = value;
        }
        login(body)
            .then(user => {
                if (user) {
                    localStorage.setItem("isLogin", true)
                    localStorage.setItem('user', JSON.stringify(user)); 
                    if (user.roles[0]?.title === ROLES.ROLE_USER) {
                        navigate(ROUTES.USER_HOME_PAGE)
                    }
                    if (user.roles[0]?.title === ROLES.ROLE_ADMIN) {
                        navigate(ROUTES.ADMIN_DASHBOARD)
                    }
                }
            }).catch((e) => {
                // showToast(e?.response?.status, e.message);
            })
    }

    return (
        <div>
            <Navbar/>
            <div className="mx-auto py-4 my-3" style={{ width: "400px" }}>
                {/* <div className="text-center mt-5 mb-3">
                    <Link to={`/`}>
                        <img src={logoIcon} className="rounded" alt="..." style={{width: "100px"}}/>
                    </Link>
                    <h2 className="mt-4" style={{color: "#01377D"}}>Login</h2>
                </div> */}
                <div className="text-center mt-5 mb-3">
                    <h2 className="mt-4" style={{color: "#007F73"}}>Login</h2>
                </div>
                <form className="border border-1 py-4 px-4 rounded-3" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword"
                            aria-describedby="signupHelp"
                        />
                        <div id="signupHelp" className="form-text text-center">
                            New member? &nbsp;
                            <Link to={ROUTES.SIGN_UP}>
                                Join us now.
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn primary-btn mt-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Signin;