import React from 'react';
import {connect} from 'react-redux';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import addLocationDimensionAction from "../../../Redux/actions/add-location-dimension-action";
const useStyles = makeStyles({
    label: {
        color: "red",
        fontWeight: "bold",
        fontSize: "1.2em",
    }
})
const FormFilterDimensionLocation = ({addLocationDimensionAction}) => {
    const classes= useStyles();
    const handleOnChangeDimension = (e) => {
        e.preventDefault();
        addLocationDimensionAction(e.target.value)
    }
    return(
        <form onChange={handleOnChangeDimension}>
            <InputLabel className={classes.label}>Dimension</InputLabel>
            <TextField id="standard-search" color="secondary" type="search" />
        </form>
    )
}
export default connect(null, {addLocationDimensionAction})(FormFilterDimensionLocation);