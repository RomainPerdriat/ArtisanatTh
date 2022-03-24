import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './reparations.scss';
import { Box } from '@material-ui/core';

const Reparations = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('reparations', className)}
            {...rest}
         >
            REPARATIONS PAGE
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
