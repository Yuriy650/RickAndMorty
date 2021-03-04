import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    cell: {
        color: "green",
        fontWeight: "bold"
    }
});
const LocationTableRow = (props) => {
    const classes = useStyles();
    return (
        <TableRow >
            <TableCell className={classes.cell} align="center">{props.name}</TableCell>
            <TableCell className={classes.cell} align="center">{props.type}</TableCell>
            <TableCell className={classes.cell} align="center">{props.dimension}</TableCell>

        </TableRow>
    )
}

export default LocationTableRow;