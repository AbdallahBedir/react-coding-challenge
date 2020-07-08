/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
// Material UI core
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core/styles';
// Material UI Icons
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  autocomplete:{
    width:'300px',
    [theme.breakpoints.down('xs')]:{
      width:'100%'
    }
  },
  searchbox: {
    borderRadius: theme.shape.borderRadius,
    display:'flex',
    marginLeft: theme.spacing(1),
    width: 'auto',
    '& $outlinedInput':{
      backgroundColor: theme.palette.common.white,    
      paddingRight: ['10px','!important'],
      [theme.breakpoints.down('xs')]:{
        paddingRight: ['2px','!important'],
        paddingLeft: ['10px','!important'],
        borderRadius: '25px'
      }
    }
  },
  outlinedInput:{},
  autocompleteOption:{
    display:'flex',
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  adornment:{
    cursor:'pointer'
  }
}));

function Autocomplete({isDesktop,handleSearch}) {
    const classes = useStyles();
    // History search would be like ['trump','US','Covid']
    const [history,setHistory] = useState([]);  

    const handleSearchClick = (q) => {
      if(q && typeof(q) === 'string' && q.length >= 3){
        handleSearch(q);
        if(history.indexOf(q) === -1){ // To remove duplicate items in history
          setHistory([...history,q]) // Add to history search   
        }
      }
    }

    const handleKeyDown = (key,q) => {
      if(key === 'Enter'){
        handleSearchClick(q)
      }
    }

    const removeItem = (e,item) => {
      e.stopPropagation(); // Keep autocomplete open
      setHistory(history.filter(ele => ele !== item)); // Remove item from history search
    }

    return (
      <React.Fragment>
        <MuiAutocomplete   
          className={classes.autocomplete}  
          selectOnFocus
          handleHomeEndKeys
          options={history}
          renderOption={(option) => ( // Display history search item & close icon
            <div className={classes.autocompleteOption}>
              <div>{option}</div>
              <IconButton onClick={(e) => removeItem(e,option)}
                  type="submit" aria-label="close">
                  <CloseIcon />
              </IconButton>
            </div>
          )}
          freeSolo
          renderInput={params => {
            return (
              <TextField
                {...params}
                onKeyDown={(event) => handleKeyDown(event.key,params && params.inputProps && params.inputProps.value)}
                className={classes.searchbox}
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                label={isDesktop ? 'Search' : ''}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton 
                        disabled={ // Disable submit button if value < 3 letters
                          (params && params.inputProps && params.inputProps.value &&
                          params.inputProps.value.length < 3) || (!params.inputProps.value)
                        }
                        onClick={() => handleSearchClick(params && params.inputProps && params.inputProps.value)} 
                        type="submit" aria-label="search">
                              <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  classes:{
                    root:classes.outlinedInput,
                  }
                }}
              />
            );
          }}
        />
      </React.Fragment>
    );
}



export default Autocomplete;


