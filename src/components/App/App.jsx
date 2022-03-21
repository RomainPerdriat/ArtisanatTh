
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './app.scss';

const App = ({className, ...rest}) => {
   return (
       <div
      className={classnames('App', className)}
      {...rest}
     >
      Artisanatth
    </div>
   );
};

App.propTypes = {
    className: PropTypes.string,
};
App.defaultProps = {
    className: '',
};
export default React.memo(App);
