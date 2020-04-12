import React,{Component}  from 'react';
import Publishers from "./components/publishers";
import './App.css';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
// import Route from 'react-router-dom/Route';
import Heros from './components/Heros';
import Slider from "./components/SimpleSlider";
import Results from "./components/Results";
import DCLogo from "./components/DCLogo.png";

import Image1 from "./components/hulk.png";
import Image2 from "./components/thor.png";
import Image3 from "./components/CaptianAmerica.png";




class App extends Component {
    state = {
        publishers: [
            {
                id: 1,
                name: "DC",
                clicked: false
            },
            {
                 id: 2,
                 name: "Marvel",
                 clicked: false
            }
        ]
    }




    render() {
        return (
            <BrowserRouter>
            <div className="App">

                <Route exact path="/" component={Publishers} />
                <Route exact path="/Heros" component={Heros} />
                <Route exact path="/Heros" component={Slider} />
                <Route exact path="/Results" component={Results} />


                {/*<div>*/}
                {/*    <Publishers publisher={this.state.publishers}/>*/}
                {/*</div>*/}

            </div>
            </BrowserRouter>
        );
    }






}



export default App;
