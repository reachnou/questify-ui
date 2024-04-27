import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ROUTES, ROUTES } from '../constants/routes';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const isLogin = localStorage.getItem("isLogin");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin !== undefined && isLogin === "true") {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                setUser(user);
            }
        }
    }, [isLogin])

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo} className='fw-bold'>Questify</h1>
            {JSON.parse(isLogin) 
            ?
                (
                    <div style={styles.links}>
                        <label className='fw-bold mt-1'>{user?.fullName}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                ) 
            :
                (
                    <div style={styles.links} className='fw-bold'>
                        <Link to={NAV_ROUTES.HOME} style={styles.link}>Home</Link>
                        <Link to={NAV_ROUTES.ABOUT} style={styles.link}>About</Link>
                        <Link to={NAV_ROUTES.FEATURES} style={styles.link}>Features</Link>
                        <Link to={NAV_ROUTES.CONTACT} style={styles.link}>Contact</Link>
                    </div>
                )
            }
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 50px',
        backgroundColor: '#4CCD99',
        color: 'white',
    },
    logo: {
        margin: 0,
        fontSize: '24px',
        color: '#FFF455',
    },
    links: {
        display: 'flex',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        marginLeft: '20px',
    }
};

export default Navbar;
