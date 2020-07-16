import React, { useState } from "react";
import Autocomplete from "./Autocomplete";
import Categories from "../config/categories";
// Material UI core
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// Material UI Icons
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  grow: {
    flexGrow: 1,
  },
  icons: {
    display: "flex",
  },
  subheader: {
    backgroundColor: theme.palette.grey[100],
    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.18)",
  },
  category: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.common.white,
      width: "250px",
    },
  },
  mobileIcon: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
}));

function NavBar(props) {
  const { handleDrawerToggle, handleSearch } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const [category, setCategory] = useState("");

  const [showCategory, setShowCategory] = useState(false); // If category select is expanded

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const categorySelect = (
    <TextField
      className={classes.category}
      select
      label="Select category"
      value={category}
      onChange={handleCategoryChange}
      variant={isDesktop ? "outlined" : "standard"}
      size="small"
      color="secondary"
    >
      <MenuItem value="">Select category</MenuItem>
      {Categories.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );

  return (
    <React.Fragment>
      {/* Header */}
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
      {/* Subheader */}
      <Toolbar className={classes.subheader}>
        <div className={classes.grow} />
        {isDesktop ? (
          <React.Fragment>
            {categorySelect}
            <Autocomplete
              isDesktop={true}
              handleSearch={(q) => handleSearch({ category, q })}
            />
          </React.Fragment>
        ) : (
          /* Show/Hide category select with css to keep the controls in the DOM and keep the searchbox value */
          <React.Fragment>
            <div className={showCategory ? classes.hide : classes.show}>
              <IconButton
                className={classes.mobileIcon}
                onClick={() => setShowCategory(!showCategory)}
                size="small"
              >
                <FilterListIcon />
              </IconButton>
              <Autocomplete
                isDesktop={false}
                handleSearch={(q) => handleSearch({ category, q })}
              />
            </div>
            <div className={showCategory ? classes.show : classes.hide}>
              {categorySelect}
              <IconButton onClick={() => setShowCategory(!showCategory)}>
                <CloseIcon />
              </IconButton>
            </div>
          </React.Fragment>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

export default NavBar;
