import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './footer.scss';

const Footer = ({className, ...rest}) => {
   return (
       <div
            className={classnames('footer', className)}
            {...rest}
         >
            FOOTER
        </div>
   );
};

Footer.propTypes = {
    className: PropTypes.string,
};
Footer.defaultProps = {
    className: '',
};
export default React.memo(Footer);
