import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './reparations.scss';
import { Box } from '@material-ui/core';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import { Typography } from '@material-ui/core';
const Reparations = ({className, ...rest}) => {
   return (


    
       <Box
            className={classnames('reparations', className)}
            {...rest}
         >
            <Box className = "reparations-container">
                <Typography>
                Il y a toujours une solution pour redonner vie à vos objets!
                </Typography>
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

Reparations.propTypes = {
    className: PropTypes.string,
};
Reparations.defaultProps = {
    className: '',
};
export default React.memo(Reparations);
