import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
import Autocomplete from './Autocomplete';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  grow:{
    flexGrow:1
  },
  icons:{
    display:'flex'
  },
  subheader:{
    backgroundColor:theme.palette.grey[100],
    boxShadow:'0 0 4px 0 rgba(0, 0, 0, 0.18)'
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const [category,setCategory] = useState(' ');
  const { handleDrawerToggle , handleSearch} = props;

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const categories = [
    {
      value: 'business',
      label: 'Business',
    },
    {
      value: 'entertainment',
      label: 'Entertainment',
    },
    {
      value: 'health',
      label: 'Health',
    },
    {
      value: 'technology',
      label: 'Technology',
    },
    {
      value: 'sports',
      label: 'Sports'
    }
  ]

  return (
      <>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.grow} variant="h6" noWrap>
                News
            </Typography>
            <div className={classes.icons}>
                <Hidden xsDown implementation="css">
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Hidden>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
            </div>
        </Toolbar>
        <Toolbar className={classes.subheader}>
          <div className={classes.grow} />
          <div className={classes.category}>
            <TextField
                id="standard-select-category"
                select
                value={category}
                onChange={handleCategoryChange}
                variant="outlined"
                size="small"
              >
                <MenuItem value={' '}>
                    Select Category
                </MenuItem>
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Autocomplete handleSearch={(q) => handleSearch({category,q})} />
        </Toolbar>
      </>
  );
}

export default NavBar;
