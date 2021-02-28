import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import SomeCharacter from "./SomeCharacter/SomeCharacter";
import addSomeCharacterAction from "../../Redux/actions/add-some-character-action";
import Pagination from '@material-ui/lab/Pagination';
import './characters.scss';
import FormSelected from "./FormSelected/FormSelected";

const Characters = ({someCharacters, gender, species, status, addSomeCharacterAction}) => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
        addSomeCharacterAction(response.data.results);
    })
    return (
        <div className='characters-content'>
            <FormSelected/>
            {someCharacters.filter(item => (item.species === species||species==='')).filter(item=> item.gender === gender||gender==='').
            filter(item=>item.status===status||status==='').map(item => {
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
            <Pagination count={5} color="primary"/>
        </div>
    )
}
const getStateToProps = (state) => {
    return {
        someCharacters: state.addSomeCharacterReducer,
        gender: state.addSelectedGenderReducer,
        species: state.addSelectedSpeciesReducer,
        status: state.addSelectedStatusReducer
    }
}

export default connect(getStateToProps, {addSomeCharacterAction})(Characters);