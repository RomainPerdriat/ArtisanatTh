import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './footer.scss';
import logo from '../../assets/Logo_cuir.svg.png';
import facebookLogo from '../../assets/fb-logo.png';
import instaLogo from '../../assets/insta-logo.png';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = ({className, ...rest}) => {
   return (
    <footer
    className={classnames('footer', className)}
    {...rest}
 >
   <Box className='footer-left'>
     <img className="footer-logo" src={logo} alt="logo artisan" />
     <p className="footer-artName">Artisanatth© - 2022 </p>
   </Box>
     <Box className='footer-right'>
        <Link className="footer-texte" to="/mentions légales">Mentions légales</Link>
        <Link className="footer-texte" to="politique de confidentialité">Politique de confidentialité</Link>

     <Link to="#" target="_blank" rel="noreferrer"><img className="footer-facebook-logo"src={facebookLogo} alt="logo facebook" /></Link>
     <Link to="#" target="_blank" rel="noreferrer"><img className="footer-facebook-logo"src={instaLogo} alt="logo instagram" /></Link>
     </Box>
</footer>
   );
};

Footer.propTypes = {
    className: PropTypes.string,
};
Footer.defaultProps = {
    className: '',
};
export default React.memo(Footer);
