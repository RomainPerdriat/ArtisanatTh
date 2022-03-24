
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './app.scss';
import Home from '../Home/Home';
import HomePage from '../HomePageCase/HomePage/HomePage';
import {Routes, Route} from 'react-router-dom';
import Creations from '../Creations/Creations';
import Reparations from '../Reparations/Reparations';
import Contact from '../Contact/Contact';
import Error404 from '../Error404/Error404'


const App = ({className, ...rest}) => {
   return (
       <div
      className={classnames('App', className)}
      {...rest}
     >
     <Routes>
        <Route path ="/" element={
                <Home>
                    <HomePage/>
                </Home>}
        />
        <Route path ="/creations" element={
                <Home>
                    <Creations/>
                </Home>}
        />
        <Route path ="/reparations" element={
                <Home>
                    <Reparations/>
                </Home>}
        />
        <Route path ="/contact" element={
                <Home>
                    <Contact/>
                </Home>}
        />
        <Route path ="*" element={
                <Home>
                    <Error404/>
                </Home>}
        />
     </Routes>
      
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
