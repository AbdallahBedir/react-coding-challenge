import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SidebarItems from "../config/sidebarItems";
// Material ui components
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
// SVG icons
import { ReactComponent as IcHelp } from "../assets/icons/ic-help-black.svg";
import { ReactComponent as GroupArrow } from "../assets/icons/group_2.svg";
import { ReactComponent as GroupArrowDark } from "../assets/icons/group.svg";
// Material ui icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& $toolbarItem": {
      margin: theme.spacing(0, 2),
      "& $logo": {
        height: "35px",
      },
    },
  },
  toolbarItem: {},
  logo: {},
  userToolbar: {
    padding: theme.spacing(1, 2),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  supportList: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  submenuItem: {
    paddingLeft: theme.spacing(4),
  },
  primaryColor: {
    color: theme.palette.primary.main,
  },
  defaultColor: {
    // sidebar icon color
    color: theme.palette.grey[500],
  },
}));

function Sidebar(props) {
  const { mobileOpen, handleDrawerToggle } = props;
  const classes = useStyles();

  const [items, setItems] = React.useState(SidebarItems);

  const handleItemClick = (hasSubmenu, index) => {
    if (!hasSubmenu) return;
    let oldItems = [...items];
    oldItems = oldItems.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false, // Close all expanded items and toggle the clicked one
    }));
    setItems(oldItems);
  };

  const drawer = (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Link
          href="#"
          className={classes.toolbarItem}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img className={classes.logo} src="logo.png" alt="USYtech" />
        </Link>
        <Link
          href="#"
          className={classes.toolbarItem}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <GroupArrow />
        </Link>
      </div>
      <div className={classes.userToolbar}>
        <TextField
          size="small"
          variant="outlined"
          defaultValue="admin@usytech.com"
          disabled
        />
      </div>
      <Divider />
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.text + index}>
            <ListItem
              button
              onClick={() => handleItemClick(item.submenu, index)}
              selected={item.isOpen || index === 0}
            >
              <ListItemIcon
                classes={{
                  root:
                    item.isOpen || index === 0
                      ? classes.primaryColor
                      : classes.defaultColor,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.submenu ? (
                item.isOpen ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )
              ) : null}
            </ListItem>
            {item.submenu && (
              <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item.submenu.map((submenuItem, i) => (
                    <ListItem
                      key={submenuItem.text + index + i}
                      button
                      className={classes.submenuItem}
                    >
                      <ListItemIcon classes={{ root: classes.defaultColor }}>
                        {submenuItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={submenuItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <List className={classes.supportList}>
        {["Support"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon classes={{ root: classes.defaultColor }}>
              <IcHelp />
            </ListItemIcon>
            <ListItemText primary={text} />
            <GroupArrowDark />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
