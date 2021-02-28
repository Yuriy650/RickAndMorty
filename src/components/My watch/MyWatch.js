import React, {Component} from 'react';
import './myWatch.scss';
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import NewWatchTableRow from "./NewWatchTableRow/NewWatchTableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

class MyWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idMas: [],
            watchList: []
        }
        this.checkWatchItem = this.checkWatchItem.bind(this);
        this.remoteWatchItemOnClick = this.remoteWatchItemOnClick.bind(this);
    }

    componentDidMount() {
        this.changeState();
        this.checkWatchItem();
    }

    clearIdMas = () => {
        this.setState({idMas: []});
        window.location.reload();
    }

    checkWatchItem = (id) => {
        let _idMas = this.state.idMas;
        _idMas.push(id);
        this.setState({idMas: _idMas});
    }
    remoteWatchItemOnClick = () => {
        for (let i = 0; i < localStorage.length; i++) {
            if (this.state.idMas.includes(localStorage.key(i))) {
                localStorage.removeItem(`${localStorage.key(i)}`);
            }
        }
        this.clearIdMas();
    }

    changeState = () => {
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            let _watchList = this.state.watchList;
            _watchList.push(newRow)
            this.setState({watchList: _watchList});
        }
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        const newRow = {
            id: Math.floor(Math.random() * 100),
            name: e.target[0].value,
            episode: e.target[2].value,
            date: e.target[4].value,
        };
        console.log(newRow);
        if (newRow.name || newRow.episode || newRow.date) {
            localStorage.setItem(`${newRow.id}`, JSON.stringify(newRow));
        }
        e.target[0].value = '';
        e.target[2].value = '';
        e.target[4].value = '';
        window.location.reload();
    }

    render() {
        return (
            <div className='myWatch-content'>
                <InputLabel className='form-title'><h3>Add your new Episode of Rick&Morty film</h3></InputLabel>
                <form className='font-content' noValidate autoComplete="off" onSubmit={this.handleOnSubmit}>
                    <TextField
                        className="text-field"
                        id="name"
                        label="Name"
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        className="text-field"
                        id="episode"
                        label="Episode"
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        className="text-field"
                        id="date"
                        variant="outlined"
                        color="secondary"
                        type="date"
                    />
                    <Button type='submit' variant="contained" color="secondary">Add new Watch</Button>
                </form>
                < div className='table-content'>
                    <TableContainer component={Paper}>
                        <Table aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='head-row' align="center"> </TableCell>
                                    <TableCell className='head-row' align="center">Name</TableCell>
                                    <TableCell className='head-row' align="center">Episode</TableCell>
                                    <TableCell className='head-row' align="center">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className='body-content' color='red'>
                                {this.state.watchList.map(item => {
                                    return (
                                        <NewWatchTableRow
                                            id={item.id}
                                            name={item.name}
                                            episode={item.episode}
                                            date={item.date}
                                            checkWatchItem={this.checkWatchItem}
                                        />
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Button onClick={this.remoteWatchItemOnClick} variant="contained" color="secondary" size="large"
                        className='remote-button'>Remove</Button>
            </div>
        )
    }
}

export default MyWatch;