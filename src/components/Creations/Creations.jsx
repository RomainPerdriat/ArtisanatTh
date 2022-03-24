import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './creations.scss';
import { Box } from '@material-ui/core';

const Creations = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('creations', className)}
            {...rest}
         >
            
        </Box>
   );
};

Creations.propTypes = {
    className: PropTypes.string,
};
Creations.defaultProps = {
    className: '',
};
export default React.memo(Creations);
