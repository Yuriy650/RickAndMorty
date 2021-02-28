import React from "react";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";
import addEpisodesFilterAction from "../../../Redux/actions/add-episodes-filter-action";

const useStyles = makeStyles({
    formContent: {
        color: "orange",
        fontSize: '1.2em',
        fontWeight: "bold"
    }
})
const FormFilterEpisode = ({addEpisodesFilterAction}) => {
    const classes = useStyles();
    const handleOnChangeName = (e) => {
        addEpisodesFilterAction(e.target.value);
    }
    return (
        <form className={classes.formContent}>
            <FormControl onChange = {handleOnChangeName} noValidate autoComplete="off">
                <TextField id="outlined-search" size='small' color='secondary' type="search" variant="outlined"/>
            </FormControl>
        </form>
    )
}

export default connect(null, {addEpisodesFilterAction})(FormFilterEpisode);