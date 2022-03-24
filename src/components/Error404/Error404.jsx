import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './error404.scss';
import { Box } from '@mui/material';

const Error404 = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('error404', className)}
            {...rest}
         >
            ERROR 404
        </Box>
   );
};

Error404.propTypes = {
    className: PropTypes.string,
};
Error404.defaultProps = {
    className: '',
};
export default React.memo(Error404);
