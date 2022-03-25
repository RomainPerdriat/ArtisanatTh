import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './creations.scss';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@material-ui/core';

const Creations = ({className, ...rest}) => {
    const handleChange = async (event) => {
        console.log(`JE FILTRE`)
    }
   return (
       <Box
            className={classnames('creations', className)}
            {...rest}
         >
           <Box className ="title-container">
                <FormControl className="select-form" fullWidth>
                    <InputLabel id="demo-simple-select-label">Catégories Principales</InputLabel>
                    <Select
                        className="select-field"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value= 'article'
                        label="Catégories Principales"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Sacs</MenuItem>
                        <MenuItem value={20}>Ceinture</MenuItem>
                        <MenuItem value={30}>Autre</MenuItem>
                            {/* Here i'll need .map to filter all articles */}
                    </Select>
                </FormControl>
            </Box>
            <Box className = "creations-container">
            
                <Box className ="creations-list">
                
            </Box>
            </Box>
        
        </Box>
   );
};

Creations.propTypes = {
    className: PropTypes.string,
};
Creations.defaultProps = {
    className: '',
};
export default React.memo(Creations);
