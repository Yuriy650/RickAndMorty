import React from 'react';
import {connect} from 'react-redux';
import './location.scss';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import LocationTableRow from "./LocationTableRow/LocationTableRow";
import addNewLocationsAction from "../../Redux/actions/add-new-location-action";
const useStyles = makeStyles({
    table: {
        width: 850,
        opacity: 0.8,
        backgroundColor: "lightyellow"

    },
    headRow: {
        color: "red",
        fontSize: '1.2em',
        fontWeight: "bold"
    },
    body: {
        color: "red",
        fontWeight: "bold"
    }
});
const Location = ({newLocations, addNewLocationsAction}) => {
    axios.get("https://rickandmortyapi.com/api/location/").then(response => {
        addNewLocationsAction(response.data.results);
        console.log(response.data.results);
    })
    const classes = useStyles();
        return (
            <div className='location-content'>
                <TableContainer className={classes.table} component={Paper}>
                    <Table className={classes.row} weight="bold" size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className={classes.headRow}>Name</TableCell>
                                <TableCell align="center" className={classes.headRow}>Type</TableCell>
                                <TableCell align="center" className={classes.headRow}>Dimension</TableCell>
                                <TableCell align="center" className={classes.headRow}>Created</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {newLocations.map(item => {
                                return (
                                    <LocationTableRow id={item.id}
                                                      name={item.name}
                                                      type={item.type}
                                                      dimension={item.dimension}
                                                      created={item.created}
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
}
const getStateToProps = (state) => {
    return {
        newLocations: state.addNewLocationReducer
    }
}
export default connect(getStateToProps, {addNewLocationsAction})(Location);