import React from 'react';
import './filter.styles.scss';
import Button from '@material-ui/core/Button';

const Filter = () => {
    return (
        <div className='filter'>
            <Button variant="contained">
                Filters</Button>
            <Button variant="contained" >
                Great Offers
            </Button>
            <Button variant="contained" >
                Rating 4.0+
            </Button>
            <Button variant="contained" >
                Safe and Hygienic
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Pure Veg
            </Button>
        </div>
    )
}
export default Filter;