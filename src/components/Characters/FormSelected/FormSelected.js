import React from "react";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";
import addSelectedGenderAction from "../../../Redux/actions/add-selected-gender-action";
import addSelectedSpeciesAction from "../../../Redux/actions/add-selected-species-action";
import addSelectedStatusAction from "../../../Redux/actions/add-selected-status-action";

const useStyles = makeStyles(()=>({
    formControl: {
        marginLeft: '100px',
        width: '250px',
        border: '2px solid red',
        borderRadius: '5px',
        backgroundColor: "lightblue",
        color:'green',
        opacity: '0.7'
    },
    form: {
        padding: '20px 175px',
    },
    label: {
        color: "red",
        fontWeight: "bold",
        fontSize: "1.3em",
    },
    option: {
        color: 'red',
    }
}))
const FormSelected = ({addSelectedGenderAction, addSelectedSpeciesAction, addSelectedStatusAction}) => {
    const classes = useStyles();
    const handleGenderOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        addSelectedGenderAction(e.target.value);
    }
    const handleSpeciesOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        addSelectedSpeciesAction(e.target.value);
    }
    const handleStatusOnChange = (e) => {
        e.preventDefault();
        addSelectedStatusAction(e.target.value);
    }
    return(
        <form className={classes.form}>
            <FormControl onChange={handleGenderOnChange} variant="filled" color='secondary' className={classes.formControl}>
                <InputLabel className={classes.label}>Gender</InputLabel>
                <Select native color='secondary' label="Gender">
                    <option className={classes.option} aria-label="None" value=""/>
                    <option className={classes.option} value='Male'>Male</option>
                    <option className={classes.option} value='Female'>Female</option>
                    <option className={classes.option} value='unknown'>unknown</option>
                </Select>
            </FormControl>
            <FormControl onChange={handleSpeciesOnChange} variant="filled" color='secondary' className={classes.formControl}>
                <InputLabel className={classes.label}>Species</InputLabel>
                <Select native color='secondary' label="Gender">
                    <option className={classes.option} aria-label="None" value=""/>
                    <option className={classes.option} value='Human'>Human</option>
                    <option className={classes.option} value='Alien'>Alien</option>
                    <option className={classes.option} value='Humanoid'>Humanoid</option>
                    <option className={classes.option} value='Animal'>Animal</option>
                    <option className={classes.option} value='Mythological Creature'>Mythological Creature</option>
                    <option className={classes.option} value='Disease'>Disease</option>
                    <option className={classes.option} value='Cronenberg'>Cronenberg</option>
                    <option className={classes.option} value='Poopybutthole'>Poopybutthole</option>
                    <option className={classes.option} value='Robot'>Robot</option>
                    <option className={classes.option} value='unknown'>unknown</option>


                </Select>
            </FormControl>
            <FormControl onChange={handleStatusOnChange} variant="filled" color='secondary' className={classes.formControl}>
                <InputLabel className={classes.label}>Status</InputLabel>
                <Select native color='secondary' label="Gender">
                    <option className={classes.option} aria-label="None" value=""/>
                    <option className={classes.option} value='Alive'>Alive</option>
                    <option className={classes.option} value='Dead'>Dead</option>
                    <option className={classes.option} value='unknown'>Unknown</option>

                </Select>
            </FormControl>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        gender: state.addSelectedGenderReducer,
        species: state.addSelectedSpeciesReducer,
        status: state.addSelectedStatusReducer
    }
}
export default connect(mapStateToProps, {addSelectedGenderAction, addSelectedSpeciesAction, addSelectedStatusAction})(FormSelected);