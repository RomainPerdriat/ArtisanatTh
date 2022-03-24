
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './app.scss';
import Home from '../Home/Home';
import HomePage from '../HomePageCase/HomePage/HomePage';


const App = ({className, ...rest}) => {
   return (
       <div
      className={classnames('App', className)}
      {...rest}
     >
      <Home>
          <HomePage/>
      </Home>
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
