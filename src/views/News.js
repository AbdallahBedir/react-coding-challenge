import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import imgPlaceholder from '../assets/imgs/img-placeholder.svg'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    media: {
        height: 140,
    },
    loading:{
        textAlign:'center',
        marginBottom:theme.spacing(2)
    }
}));

const News = ({data,loading}) => {
    const classes = useStyles();
    
    return ( 
        <div className="news">
            {loading && (
                <div className={classes.loading}>
                     <CircularProgress />
                </div>
            )}
            {
                data.length === 0 && !loading && (
                    <Typography variant="body2" align="center" 
                        color="textSecondary" component="p" gutterBottom>
                        No news match your search
                    </Typography>
                )
            }
            <Grid container justify="center" spacing={3}>
                {data.map((headline,index) => (
                    <Grid key={headline.title+index} item lg={4} md={6}>
                        <Link href={headline.url} target="_blank" rel="noreferrer">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={headline.urlToImage || imgPlaceholder}
                                        title={headline.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {headline.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {headline.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
 

export default News;