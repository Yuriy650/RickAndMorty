import React, {Component} from 'react';
import {connect} from 'react-redux'
import addNewEpisodeAction from "../../Redux/actions/add-new-episode-action";
import addEpisodePageAction from "../../Redux/actions/add-episode-page-action";
import EpisodeTableRow from "./EpisodeTableRow/EpisodeTableRow";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import FormFilterNameEpisode from "./FormFilterNameEpisode/FormFilterNameEpisode";
import FormFilterEpisode from "./FormFilterEpisode/FormFilterEpisode";
import FormFilterDateEpisode from "./FormFilterDateEpisode/FormFilterDateEpisode";
import Pagination from '@material-ui/lab/Pagination';
import './episodes.scss';


class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowsPerPage: 20,
            currentPage: 1,
            countPages: 1
            }
    }
    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/episode?page=${this.props.episodePage}`)
            .then(response => response.json())
            .then(data => {
                this.props.addNewEpisodeAction(data.results);
                this.setState({countPages: Math.ceil(data.info.count/this.state.rowsPerPage)})
            });
    }
    handleChangePage(e) {
        this.props.addEpisodePageAction(+e.target.innerText);
        fetch(`https://rickandmortyapi.com/api/episode?page=${+e.target.innerText}`)
            .then(response => response.json())
            .then(data => {
                this.props.addNewEpisodeAction(data.results);
                this.setState({countPages: Math.ceil(data.info.count/this.state.rowsPerPage)})
            });
    }

render() {

    return (
        <div className='episode-content'>
            <div className='episodes-table' >
                <Table weight="bold" size="small" aria-label="a dense table">
                    <TableHead  className='episodes-headRow'>
                        <TableRow>
                            <TableCell align="center" className='episodes-headRow'>
                                Name
                                <FormFilterNameEpisode/>
                            </TableCell>
                            <TableCell align="center" className='episodes-headRow'>
                                Episode
                                <FormFilterEpisode/>
                            </TableCell>
                            <TableCell align="center" className='episodes-headRow'>
                                Air-Date
                                <FormFilterDateEpisode/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.newEpisodes.results.filter(item => item.name.toLowerCase().includes(this.props.episodesName) || this.props.episodesName === '').filter(
                            item => item.episode.toLowerCase().includes(this.props.findEpisode)).filter(
                            item => item.air_date.toLowerCase().includes(this.props.findDate)).map(item => {
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
            </div>
            <div>
               <Pagination count={this.state.countPages} variant="outlined" shape="rounded"
                           onClick={(e)=>this.handleChangePage(e)}/>
            </div>

        </div>
    )
}

}
const mapStateToProps = (state) => {
    return {
        newEpisodes: state.addNewEpisodeReducer,
        episodesName: state.addEpisodesNameReducer,
        findEpisode: state.addEpisodesFilterReducer,
        findDate: state.addEpisodesDateReducer,
        episodePage: state.addEpisodePageReducer
    }
}

export default connect(mapStateToProps, {addNewEpisodeAction, addEpisodePageAction})(Episodes);