import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const EpisodeTableRow = (props) => {
    return (
        <TableRow>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.episode}</TableCell>
            <TableCell align="center">{props.airDate}</TableCell>

        </TableRow>

    )
}

export default EpisodeTableRow;