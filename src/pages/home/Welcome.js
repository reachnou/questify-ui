import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useEffect } from "react";
import { ROLES } from "../../constants/roles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { userDetails } from "../../api/auth";

function Welcome() {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("isLogin");

    useEffect(() => {
        if (isLogin !== undefined && isLogin === "true" && userDetails?.roles[0]?.title === ROLES.ROLE_USER) {
            navigate(ROUTES.USER_HOME_PAGE)
        }
        if (isLogin !== undefined && isLogin === "true" && userDetails?.roles[0]?.title === ROLES.ROLE_ADMIN) {
            navigate(ROUTES.ADMIN_DASHBOARD)
        }
    })

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <header style={styles.header}>
                    <h1>Welcome to Questify</h1>
                    <p>Your one-stop solution for managing life's challenges and tasks.</p>
                </header>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                        <h3>To-Do List</h3>
                        <p>Organize your tasks and increase your productivity.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>Flash Card</h3>
                        <p>Enhance your learning and memorization skills.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>Challenge Friend</h3>
                        <p>Invite friends to compete on knowledge quizzes.</p>
                    </div>
                </div>
                <p>Your adventure starts here.</p>
                <button onClick={() => navigate(ROUTES.SIGN_IN)}>Login to Continue</button>
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px'
    },
    header: {
        marginBottom: '40px'
    },
    features: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
    },
    featureCard: {
        width: '250px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#4CCD99',
        color: "#f5f5f5"
    }

}

export default Welcome;