import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import Box from '@mui/material/Box';
import NavBar from '../NavBar/NavBar';

const Header = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('header', className)}
            {...rest}
         >
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
