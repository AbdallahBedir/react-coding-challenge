import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    media: {
        height: 140,
    },
});

const News = ({data}) => {
    const classes = useStyles();
    
    return ( 
        <div className="news">
            <Grid container justify="center" spacing={3}>
                {data.map((headline,index) => (
                    <Grid key={headline.title+index} item lg={4} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={headline.urlToImage || '/img-copy.svg'}
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
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
 

export default News;