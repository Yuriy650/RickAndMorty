import React from 'react';
import axios from "axios";
import {connect} from 'react-redux'
import './episodes.scss';
import addNewEpisodeAction from "../../Redux/actions/add-new-episode-action";
import EpisodeTableRow from "./EpisodeTableRow/EpisodeTableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {makeStyles} from "@material-ui/core/styles";
import FormFilterNameEpisode from "./FormFilterNameEpisode/FormFilterNameEpisode";
import FormFilterEpisode from "./FormFilterEpisode/FormFilterEpisode";
import FormFilterDateEpisode from "./FormFilterDateEpisode/FormFilterDateEpisode";
const useStyles = makeStyles({
    table: {
        width: 850,
        opacity: 0.8,
        backgroundColor: "lightyellow"

    },
    headRow: {
        color: "orange",
        fontSize: '1.2em',
        fontWeight: "bold"

    },
    
});

const Episodes = ({newEpisodes, episodesName, findEpisode, findDate, addNewEpisodeAction}) => {
    axios.get("https://rickandmortyapi.com/api/episode/").then(response => {
        addNewEpisodeAction(response.data.results);
            })
    const classes = useStyles();
        return(
            <div className='episodes-content'>
                <TableContainer className={classes.table} component={Paper}>
                    <Table  className={classes.row} weight="bold" size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className={classes.headRow}>
                                    Name
                                    <FormFilterNameEpisode />
                                </TableCell>
                                <TableCell align="center" className={classes.headRow}>
                                    Episode
                                    <FormFilterEpisode />
                                </TableCell>
                                <TableCell align="center" className={classes.headRow}>
                                    Air-Date
                                    <FormFilterDateEpisode/>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {newEpisodes.filter(item=>item.name.toLowerCase().includes(episodesName) || episodesName==='').
                            filter(item=>item.episode.toLowerCase().includes(findEpisode)).
                            filter(item=>item.air_date.toLowerCase().includes(findDate)).map(item => {
                                console.log(item.name);
                                return (
                                    <EpisodeTableRow id={item.id}
                                                     episode={item.episode}
                                                     name={item.name}
                                                     airDate={item.air_date}
                                                     created={item.created}
                                                     characters={item.characters}
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
        newEpisodes: state.addNewEpisodeReducer,
        episodesName: state.addEpisodesNameReducer,
        findEpisode: state.addEpisodesFilterReducer,
        findDate: state.addEpisodesDateReducer
    }
}

export default connect(getStateToProps, {addNewEpisodeAction})(Episodes);