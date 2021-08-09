import {BrowserRouter, NavLink, Route} from "react-router-dom";
import './App.css';
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Location from "./components/Location/Location";
import MyWatch from "./components/My watch/MyWatch";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Navbar/>
                <div className='content'>
                    <Route path='/characters' component={Characters}/>
                    <Route path='/episodes' component={Episodes}/>
                    <Route path='/location' component={Location}/>
                    <Route path='/mywatch' component={MyWatch}/>
                  {/*  <Route path='/home' component={Home}/>*/}
                    <Route path='/' component={Home}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
