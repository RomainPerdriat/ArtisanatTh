import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './restaurations.scss';
import { Box } from '@material-ui/core';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import { Typography } from '@material-ui/core';
const Restaurations = ({className, ...rest}) => {
   return (


    
       <Box
            className={classnames('restaurations', className)}
            {...rest}
         >  
            
            <Box className = "restaurations-container">
            <Box className ="title-container">
                    <Typography className ="restaurations-title">
                    Il y a toujours une solution pour redonner vie à vos objets!
                    </Typography>
            </Box>
                <Box className ="before-after-list">
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/>
                <BeforeAfter/> 
            </Box>
            </Box>
        </Box>
   );
};

Restaurations.propTypes = {
    className: PropTypes.string,
};
Restaurations.defaultProps = {
    className: '',
};
export default React.memo(Restaurations);
