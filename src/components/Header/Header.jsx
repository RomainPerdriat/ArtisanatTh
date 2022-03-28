/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import Box from '@mui/material/Box';
import NavBar from '../NavBar/NavBar';
import logo from '../../assets/Logo_cuir.svg.png';
import { Typography } from '@mui/material';

const Header = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('header', className)}
            {...rest}
         > 
        <Typography className = "header-title">ARTISANT</Typography>
            <img className = "header-logo" src={logo} alt="Logo" />;
        <Typography className = "header-title"> MAROQUINIER D&apos;ART</Typography>
         <NavBar/> 
        </Box>
   );
};

Header.propTypes = {
    className: PropTypes.string,
};
Header.defaultProps = {
    className: '',
};
export default React.memo(Header);
