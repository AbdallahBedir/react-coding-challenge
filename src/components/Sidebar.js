import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// SVG icons
import IcChromeReader  from "../assets/icons/ic-chrome-reader-mode.svg";
import IcCollectReviews  from "../assets/icons/ic-local-play-black-24-px.svg";
import IcManageReviews from "../assets/icons/ic-manage-reviews.svg";
import IcShowReviews  from "../assets/icons/ic-show-reviews.svg";
import IcExtension  from "../assets/icons/ic-extension.svg";
import IcPieChart from "../assets/icons/ic-pie-chart.svg";
import IcFreeBreakfast from "../assets/icons/ic-free-breakfast.svg";
import IcSettings from "../assets/icons/ic-settings.svg";
import IcLabs from "../assets/icons/ic-labs.svg";
import Ichelp from "../assets/icons/ic-help-black-24-px.svg";
import GroupArrow from '../assets/icons/group_2.svg';
import GroupArrowDark from '../assets/icons/group.svg';
import ArrowRight from '../assets/icons/ic-chevron-right_2.svg';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection: 'column',
        height: '100%'
    },
    // necessary for content to be below app bar
    toolbar:{
        ...theme.mixins.toolbar,
        background:theme.palette.primary.main,
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        '& img':{
            margin:theme.spacing(0,2),
            '&.logo':{
                height: '35px',
            }
        }
    },
    userToolbar:{
        padding:theme.spacing(1,2)
    },
    drawerPaper: {
        width: drawerWidth,
    },
    supportList:{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
}));

function Sidebar(props) {
    const { mobileOpen, handleDrawerToggle } = props;
    const classes = useStyles();

    const sidebarItems = [
        {
            text:'News',
            icon:IcChromeReader
        },
        {
            text:'Invitations',
            icon:IcCollectReviews,
            submenu:true
        },
        {
            text:'Reviews',
            icon:IcManageReviews,
            submenu:true
        },
        {
            text:'Show reviews',
            icon:IcShowReviews,
            submenu:true
        },
        {
            text:'Apps & Integrations',
            icon:IcExtension,
            submenu:true
        },
        {
            text:'Analytics',
            icon:IcPieChart,
            submenu:true
        },
        {
            text:'Tips and Ideas',
            icon:IcFreeBreakfast
        },
        {
            text:'Settings',
            icon:IcSettings,
            submenu:true
        },
        {
            text:'Labs',
            icon:IcLabs,
            submenu:true
        },
    ] 
    const drawer = (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <Link href="#" onClick={(e) => {e.preventDefault()}}>
                    <img className="logo" src="logo.png" alt="USYtech" />
                </Link>
                <Link href="#" onClick={(e) => {e.preventDefault()}}>
                    <img src={GroupArrow} alt="group arrow"/>
                </Link>
            </div>
            <div className={classes.userToolbar}>
                <TextField size="small" variant="outlined" defaultValue="admin@usytech.com" disabled/>
            </div>
            <Divider />
            <List>
                {sidebarItems.map(item => (
                    <ListItem button key={item.text}>
                        <ListItemIcon>
                            <img src={item.icon} alt={item.text} />                
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                        {item.submenu && 
                            <img src={ArrowRight} alt={item.text} />
                        }
                    </ListItem>
                ))}
            </List>
            <List className={classes.supportList}>
                {['Support'].map(text => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        <img src={Ichelp} alt="support" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    <img src={GroupArrowDark} alt="group arrow" />
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
                    anchor='left'
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
