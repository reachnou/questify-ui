import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2024 Questify. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        textAlign: 'center',
        padding: '20px',
        marginTop: '20px',
        backgroundColor: '#007F73',
        color: 'white',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    }
};

export default Footer;
