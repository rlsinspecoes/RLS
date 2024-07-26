import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';


function Layout(props) {
    const location = useLocation();
    const isContactPage = location.pathname === '/contatos';

    return (
        <>
            <Nav />
            <main>{props.children}</main>
            {!isContactPage && <Footer />}
        </>
    );
}

export default Layout;
