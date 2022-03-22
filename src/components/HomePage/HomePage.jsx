/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './homepage.scss';

const HomePage = ({className, ...rest}) => {
   return (
       <div
            className={classnames('homepage', className)}
            {...rest}
         >
           Page daccueil

        </div>
   );
};

HomePage.propPageTypes = {
    className: PropTypes.string,
};
HomePage.defaultProps = {
    className: '',
};
export default React.memo(HomePage);
