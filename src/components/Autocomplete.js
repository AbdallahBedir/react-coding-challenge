/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles((theme) => ({
  searchbox: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,    
    display:'flex',
    marginLeft: theme.spacing(1),
    width: 'auto',
    '& .MuiOutlinedInput-root':{
      paddingRight: ['20px','!important']
    }
  },
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

function Autocomplete({handleSearch}) {
    const classes = useStyles();
    const [history,setHistory] = useState([]);  

    const handleSearchClick = (q) => {
      handleSearch(q)
      if(q){
        if(history.indexOf(q) === -1){ // To remove duplications items in history
          setHistory([...history,q]) // Add to history search   
        }
      }
    }

    const removeItem = (e,item) => {
      e.stopPropagation(); // Keep autocomplete open
      setHistory(history.filter(ele => ele !== item)); // Remove item from history search
    }

    return (
      <>
        <MuiAutocomplete   
          id="free-solo-demo"    
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
          style={{ width: 300 }}
          freeSolo
          renderInput={params => {
            return (
              <TextField
                {...params}
                label=""
                className={classes.searchbox}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Search"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton disabled={ // Disable submit button if value < 3 letters
                          (params && params.inputProps && params.inputProps.value &&
                          params.inputProps.value.length < 3) || (!params.inputProps.value)
                        }
                        onClick={() => handleSearchClick(params && params.inputProps && params.inputProps.value)} 
                        type="submit" aria-label="search">
                              <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            );
          }}
        />
      </>
    );
}



export default Autocomplete;


