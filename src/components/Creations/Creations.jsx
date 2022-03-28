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
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import { useState } from 'react';

const Creations = ({className, ...rest}) => {
    // const handleChange = async (event) => {
    //     console.log(`JE FILTRE`)
    // }
    const [allBtn, setAllBtn] = useState(true);
    const [bagBtn, setBagBtn] = useState(false);
    const [beltBtn, setBeltBtn] = useState(false);
    const [variousBtn, setVariousBtn] = useState(false);
 
    function handleAllBtnClick () {
        setAllBtn(!allBtn)
        setBagBtn(false)
        setBeltBtn(false)
        setVariousBtn(false)
    }
    function handleBagBtnClick () {
        setBagBtn(!bagBtn)
        setAllBtn(false)
        setBeltBtn(false)
        setVariousBtn(false)
    }
    function handleBeltBtnClick () {
        setBeltBtn(!beltBtn)
        setAllBtn(false)
        setBagBtn(false)
        setVariousBtn(false)
    }
    function handleVariousBtnClick () {
        setVariousBtn(!variousBtn)
        setAllBtn(false)
        setBeltBtn(false)
        setBagBtn(false)
    }
    

   return (
       <Box
            className={classnames('creations', className)}
            {...rest}
         >
         
          
            <Box className = "creations-container">
            <Box className = "creations-btns">
                <button onClick = {handleAllBtnClick} className="btn">Tout</button>
                <button onClick = {handleBagBtnClick} className="btn">Sacs</button>
                <button onClick = {handleBeltBtnClick} className="btn">Ceintures</button>
                <button onClick = {handleVariousBtnClick} className="btn">Divers</button>
         </Box>   
            {/* <FormControl className="select-form" fullWidth>
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
                    </Select>
                </FormControl> */}
                {allBtn  &&
                <>
                    <Typography>TOUT</Typography>
                    <Box className ="creations-list">
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    </Box>
                </>}
                {bagBtn &&
                <>
                    <Typography>Sacs</Typography>
                    <Box className ="creations-list">
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    </Box>
                </>}
                {beltBtn &&
                <>
                    <Typography>Ceintures</Typography>
                    <Box className ="creations-list">
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    </Box>
                </>}
                {variousBtn &&
                <>
                    <Typography>Divers</Typography>
                    <Box className ="creations-list">
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    <BeforeAfter/>
                    </Box>
                </>}
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
