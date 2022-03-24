import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import { Box } from '@material-ui/core';

const Contact = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('contact', className)}
            {...rest}
         >
            CONTACT PAGE
        </Box>
   );
};

Contact.propTypes = {
    className: PropTypes.string,
};
Contact.defaultProps = {
    className: '',
};
export default React.memo(Contact);
