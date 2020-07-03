/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    display:'flex',
    marginLeft: theme.spacing(1),
    width: 'auto',
    '& .MuiInputBase-root':{
      height:'100%',
      paddingLeft: theme.spacing(2)
    }
  },
  autocompleteOption:{
    display:'flex',
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center'
  }
}));

export default function Autocomplete({handleSearch}) {
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
    <MuiAutocomplete          
      selectOnFocus
      handleHomeEndKeys
      options={history}
      renderOption={(option) => ( // Display history search item & close icon
        <div className={classes.autocompleteOption} style={{display:'flex'}}>
          <div>{option}</div>
          <IconButton onClick={(e) => removeItem(e,option)}
              type="submit" aria-label="close">
              <CloseIcon />
          </IconButton>
        </div>
      )}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (  // Render searchbox & submit search icon
          <div className={classes.root}>
              <TextField 
                {...params} 
                placeholder="Search" 
                InputProps={{...params.InputProps, disableUnderline: true}}
                size="small" />
              <IconButton disabled={ // Disable submit button if value < 3 letters
                (params && params.inputProps && params.inputProps.value &&
                params.inputProps.value.length < 3) || (!params.inputProps.value)
              }
                onClick={() => handleSearchClick(params && params.inputProps && params.inputProps.value)} 
                type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
          </div>
        )}
    />
  );
}






