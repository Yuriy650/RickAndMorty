import React from 'react';
import './home.scss';
import img from '../../image/rickAndMorty3.png';
import title from '../../image/rick-title.png';
const Home = () => {
    return(
        <div className='home-content'>
            <img className='title' src={title} alt='Rick and Morty'/>
            <img className='rick-morty-image' src={img} alt='Rick&Morty'/>

        </div>
    )
}

export default Home;