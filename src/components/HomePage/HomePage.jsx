/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './homepage.scss';
import { Box } from '@material-ui/core';
// import bg from '../../assets/exemple.jpg';

const HomePage = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('homepage', className)}
            {...rest}
         >
           <Box className = "homepage-picture"/>
           <Box className = "homepage-card"> Hello</Box>
        </Box>
   );
};

HomePage.propPageTypes = {
    className: PropTypes.string,
};
HomePage.defaultProps = {
    className: '',
};
export default React.memo(HomePage);
