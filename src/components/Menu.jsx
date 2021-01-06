import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="menu">
            <Link to='/jobs'>Jobs</Link>
            <Link to='/companies'>Companies</Link>
        </div>
    );
};

export default Header;
