import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './homepagecardmodal.scss';
import { Box } from '@material-ui/core';

const HomePageCardModal = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('homepagecardmodal', className)}
            {...rest}
         >
            
        </Box>
   );
};

HomePageCardModal.propTypes = {
    className: PropTypes.string,
};
HomePageCardModal.defaultProps = {
    className: '',
};
export default React.memo(HomePageCardModal);
