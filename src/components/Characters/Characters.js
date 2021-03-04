import React, {Component} from 'react';
import {connect} from 'react-redux';
import SomeCharacter from "./SomeCharacter/SomeCharacter";
import addSomeCharacterAction from "../../Redux/actions/add-some-character-action";
import addPageAction from "../../Redux/actions/add-page-action";
import FormSelected from "./FormSelected/FormSelected";
import classes from "./characters.module.css";
import Pagination from "@material-ui/lab/Pagination";

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 20
        }
    }
    componentDidMount() {
        /*axios.get(`https://rickandmortyapi.com/api/character?page=${this.props.page}&count=${this.state.pageSize}`)
            .then(response => {
            this.props.addSomeCharacterAction(response.data.results);
            this.setState({countPages: Math.ceil(response.data.info.count / this.state.pageSize)})
        });*/

        fetch(`https://rickandmortyapi.com/api/character?page=${this.props.page}`)
            .then(response => response.json())
            .then(data => {
                    this.props.addSomeCharacterAction(data.results);
                    this.setState({countPages: Math.ceil(data.info.count / this.state.pageSize)})
            });
    }
    handleOnChangePage(e) {
        console.log(e.target.innerText)
        this.props.addPageAction(+e.target.innerText);
        fetch(`https://rickandmortyapi.com/api/character?page=${+e.target.innerText}`)
            .then(response => response.json())
            .then(data => {
                this.props.addSomeCharacterAction(data.results);
                this.setState({countPages: Math.ceil(data.info.count / this.state.pageSize)})
            });
    }
    render() {
        return (
            <div className={classes.charactersContent}>
                <FormSelected/>
                {this.props.someCharacters.results.filter(item => (item.species === this.props.species || this.props.species === '')).filter(item => item.gender === this.props.gender || this.props.gender === '').filter(item => item.status === this.props.status || this.props.status === '').map(item => {
                    return (
                        <SomeCharacter id={item.id}
                                       image={item.image}
                                       name={item.name}
                                       species={item.species}
                                       gender={item.gender}
                                       status={item.status}
                                       origin={item.origin.name}
                                       type={item.type}
                                       location={item.location.name}
                        />
                    )
                })}
                <div className={classes.characterPage}>
                    <Pagination count={this.state.countPages} size="small" color="secondary" onClick={(e)=>this.handleOnChangePage(e)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        someCharacters: state.addSomeCharacterReducer,
        gender: state.addSelectedGenderReducer,
        species: state.addSelectedSpeciesReducer,
        status: state.addSelectedStatusReducer,
        page: state.addPageReducer
    }
}

export default connect(mapStateToProps, {addSomeCharacterAction, addPageAction})(Characters);