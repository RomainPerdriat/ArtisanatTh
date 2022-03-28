import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './beforeafter.scss';
import { Box } from '@material-ui/core';
import cuirs from '../../assets/cuirs.jpg';
import exemple from '../../assets/exemple.jpg'


const BeforeAfter = ({className, ...rest}) => {
   return (
       <Box
            className={classnames('beforeafter', className)}
            {...rest}
         >
              <Box className="flip-card-container">
                  <Box className="flip-card">
                    <Box className="flip-card-front">
                      <Box 
                      component="img"
                      sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                      }}
                      alt="restauration1"
                      src={exemple}>
                      </Box>
                    </Box>
                    <Box>
                    <Box  class="flip-card-back"
                      component="img"
                      sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                      }}
                      alt="restauration1"
                      src={cuirs}>
                      </Box>
                    </Box>
                  </Box>
              </Box>
        </Box>
   );
};

BeforeAfter.propTypes = {
    className: PropTypes.string,
};
BeforeAfter.defaultProps = {
    className: '',
};
export default React.memo(BeforeAfter);
