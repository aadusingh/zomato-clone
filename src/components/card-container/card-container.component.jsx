import React from 'react';
import './card-container.styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Card = () => {
    return (
        <div className='cards'>
            <Grid container spacing={4}>

                <Grid item xs={3}>
                    <Paper className={Card.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={Card.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={Card.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={Card.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default Card;
