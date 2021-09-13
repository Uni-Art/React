import React from 'react';
import Header from '../components/Header';
import '../components/Header.css';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            <main>{children}</main>
        </React.Fragment>
    );
};
export default Layout;