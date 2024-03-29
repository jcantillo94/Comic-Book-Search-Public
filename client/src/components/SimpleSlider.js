import React, {Component} from "react";
import Slider from "react-slick";
import GetInput from "./GetInput";
import hulk from './Images/hulk.png';
import deadPool from './Images/deadpool.png';
import punisher from './Images/punisher.png';
import CptnAmr from './Images/CaptianAmerica.png';
import lukeCage from './Images/lukecage.png';
import silverSurfer from './Images/silversurfer.png';
import ironMan from './Images/IronMan.png';
import blackPanther from './Images/blackpanther.png';
import spiderMan from './Images/spiderMan.png';
import wolverine from './Images/wolverine.png';
import {Link} from "react-router-dom";
import joker from "./Images/joker.png";
import superMan from "./Images/superman.png";
import batMan from "./Images/batman.png";
import wonderWoman from "./Images/wonderwoman.png";
import greenLantern from "./Images/greenlantern.png";
import johnC from "./Images/johnconstantine.png";
import greenArrow from "./Images/greenarrow.png";
import aquaMan from "./Images/aquaman.png";
import bane from "./Images/bane.png";
import theFlash from "./Images/flash.jpg";

class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        if (this.props.location.state.Publisher == "Marvel"){
        this.state = {
            Publisher: this.props.location.state.Publisher,
            Character: "",
        }}

        else if (this.props.location.state.Publisher == "DC") {
            this.state = {
                Publisher: this.props.location.state.Publisher,
                Character: "",
            }
        }
    }

    render() {
        console.log(this.state.Publisher);

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        if (this.props.location.state.Publisher == "Marvel"){
            return (
                <div>

                    <h2 className="Quick-Fix">Characters</h2>
                    <Slider className="Slider" {...settings}>

                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Spider-Man', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images" src={spiderMan}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Hulk', Publisher: this.state.Publisher}
                            }}><img className="Hero-Images"
                                    src={hulk}/> </Link>
                        </div>
                        <div>
                            <Link to="/Results" to={{
                                pathname: "/Results",
                                state: {Character: 'Captain America', Publisher: this.state.Publisher}
                            }}><img
                                className="Hero-Images" src={CptnAmr}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Deadpool', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={deadPool}/> </Link>
                        </div>
                        <div>
                            <Link to="/Results" to={{
                                pathname: "/Results",
                                state: {Character: 'Black Panther', Publisher: this.state.Publisher}
                            }}> <img
                                className="Hero-Images" src={blackPanther}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Wolverine', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={wolverine}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Punisher', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={punisher}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Iron Man', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={ironMan}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Luke Cage', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={lukeCage}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Silver Surfer', Publisher: this.state.Publisher}
                            }}> <img
                                className="Hero-Images" src={silverSurfer}/> </Link>
                        </div>
                    </Slider>
                    <h3 className="Quick-Fix">Characters</h3>
                    <h3 className="Quick-Fix">Characters</h3>

                </div>
            );
        }

        else if (this.props.location.state.Publisher == "DC"){
            return (
                <div>
                    <h2 className="Quick-Fix">Characters</h2>
                    <Slider className="Slider" {...settings}>

                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Joker', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images" src={joker}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Superman', Publisher: this.state.Publisher}
                            }}><img className="Hero-Images"
                                    src={superMan}/> </Link>
                        </div>
                        <div>
                            <Link to="/Results" to={{
                                pathname: "/Results",
                                state: {Character: 'Batman', Publisher: this.state.Publisher}
                            }}><img
                                className="Hero-Images" src={batMan}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Wonder Woman', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={wonderWoman}/> </Link>
                        </div>
                        <div>
                            <Link to="/Results" to={{
                                pathname: "/Results",
                                state: {Character: 'Green Lantern', Publisher: this.state.Publisher}
                            }}> <img
                                className="Hero-Images" src={greenLantern}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'John Constantine', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={johnC}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Green Arrow', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={greenArrow}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Aquaman', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={aquaMan}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'Bane', Publisher: this.state.Publisher}
                            }}> <img className="Hero-Images"
                                     src={bane}/> </Link>
                        </div>
                        <div>
                            <Link to={{
                                pathname: "/Results",
                                state: {Character: 'The Flash', Publisher: this.state.Publisher}
                            }}> <img
                                className="Hero-Images"
                                src={theFlash}/> </Link>
                        </div>
                    </Slider>
                    <h3 className="Quick-Fix">Characters</h3>
                    <h3 className="Quick-Fix">Characters</h3>

                </div>

            );
        }
    }
}

export default SimpleSlider;