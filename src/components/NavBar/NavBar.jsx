/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import classnames from 'classnames';
import './navbar.scss';
import { AppBar,  Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';

  

const NavBar = ({className, ...rest}) => {
   return (
       
        <AppBar sx = {{ bgcolor: '#455a64',
        position: 'absolute',
        boxShadow: 1,
        p: .5,
        mt:14,
        minWidth: 120,}}>
            <Toolbar className = "toolbar">
                <NavLink className = "navlink" to ="/">Accueil</NavLink>
                <NavLink className = "navlink" to = "/creations">Créations</NavLink>
                <NavLink className = "navlink" to ="/restaurations">Restaurations</NavLink>
                <NavLink className = "navlink" to ="/contact">Contact</NavLink>
                <SearchInput />
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
