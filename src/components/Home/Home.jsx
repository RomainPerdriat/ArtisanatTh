import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './home.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



const Home = ({
    className,
    // eslint-disable-next-line react/prop-types
    children,
     ...rest}) => {
   return (
       <div
            className={classnames('home', className)}
            {...rest}
         >
            <Header/>
                {children}
            <Footer/>
        </div>
   );
};

Home.propTypes = {
    className: PropTypes.string,
};
Home.defaultProps = {
    className: '',
};
export default React.memo(Home);
