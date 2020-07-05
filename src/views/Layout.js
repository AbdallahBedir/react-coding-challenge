import React,{useState} from 'react';
import MuiNavBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import News from './News';
import API from '../config/api';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:theme.palette.secondary.main,
    padding:theme.spacing(3,2),
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    backgroundColor:theme.palette.common.white,
    color:theme.palette.primary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [news,setNews] = useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (params) => {
    // TODO: Display loading
    if(!params.category || !params.category.trim()){
      delete params.category;
    }
    API.get('top-headlines',{params}).then(response => {
        if(response && response.data && response.data.articles){
          setNews(response.data.articles)
        }
    }).catch(err => {
        setNews([])
        // TODO: Handle error 
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiNavBar position="fixed" className={classes.appBar}>
          <NavBar handleDrawerToggle={handleDrawerToggle} handleSearch={handleSearch}/>
      </MuiNavBar>
      <nav className={classes.drawer} aria-label="sidebar items">
          <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </nav>
      <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.toolbar} />
          <News data={news}/>
      </main>
    </div>
  );
}

export default Layout;
