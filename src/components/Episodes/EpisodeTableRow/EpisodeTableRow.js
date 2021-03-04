import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import './episodesTableRow.scss'

const EpisodeTableRow = (props) => {
    return (
        <TableRow className='episodes-table-row'>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.episode}</TableCell>
            <TableCell align="center">{props.airDate}</TableCell>

        </TableRow>

    )
}

export default EpisodeTableRow;