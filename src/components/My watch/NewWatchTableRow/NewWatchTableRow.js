import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import './newWatchTableRow.scss';

const NewWatchTableRow = (props) => {
    const handleOnClick = (e) => {

        e.preventDefault();

        props.checkWatchItem(e.target.id);
    }
    return (
        <TableRow className='table-row' color='red'>
            <Checkbox onClick={handleOnClick}
                      className="text-field"
                      id={props.id}
                      name="check"
                      color="secondary"
                      align="center"
            />
            <TableCell  align="center">{props.name}</TableCell>
            <TableCell  align="center">{props.episode}</TableCell>
            <TableCell  align="center">{props.date}</TableCell>

        </TableRow>
    )
}
export default NewWatchTableRow;