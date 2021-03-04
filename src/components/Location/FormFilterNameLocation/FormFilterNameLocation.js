import React from 'react';
import {connect} from 'react-redux';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import addLocationNameAction from "../../../Redux/actions/add-location-name-action";
const useStyles = makeStyles({
    label: {
        color: "red",
        fontWeight: "bold",
        fontSize: "1.2em",
    }
})
const FormFilterNameLocation = ({addLocationNameAction}) => {
    const handleOnChangeName = (e) => {
        addLocationNameAction(e.target.value);
    }
    const classes= useStyles();
    return(
        <form onChange={handleOnChangeName}>
        <InputLabel className={classes.label}>Name</InputLabel>
        <TextField id="standard-search" color="secondary" type="search" />
        </form>
    )
}
export default connect(null, {addLocationNameAction})(FormFilterNameLocation);