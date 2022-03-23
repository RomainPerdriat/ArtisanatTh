/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import classnames from 'classnames';
import './navbar.scss';
import { AppBar,  Toolbar,Typography} from '@mui/material';

import SearchInput from '../SearchInput/SearchInput';

  

const NavBar = ({className, ...rest}) => {
   return (
       
        <AppBar sx = {{ bgcolor: '#455a64',
        boxShadow: 1,
        p: .5,
        mt:14,
        minWidth: 120,}}>
        <Toolbar className = "toolbar">
            {/* <div className="navlinks"> */}
            <Typography className = "typography">Accueil</Typography>
            <Typography className = "typography">Créations</Typography>
            <Typography className = "typography">Réparations</Typography>
            <Typography className = "typography">Contact</Typography>
            <SearchInput />
            {/* <Link to="/" className="link">
                Home
            </Link>
            <Link to="/about" className="link">
                About
            </Link>
            <Link to="/contact" className="link">
                Contact
            </Link>
            <Link to="/faq" className="link">
                FAQ
            </Link> */}
            {/* </div> */}
        </Toolbar>
        
    </AppBar>
    
    )
};

NavBar.propTypes = {
    className: PropTypes.string,
};
NavBar.defaultProps = {
    className: '',
};
export default React.memo(NavBar);
