import React, {Component} from "react";
import Slider from "react-slick";
import GetInput from "./GetInput";
import hulk from './hulk.png';
import deadPool from './deadpool.png';
import punisher from './punisher.jpg';
import CptnAmr from './CaptianAmerica.png';
import lukeCage from './lukecage.png';
import silverSurfer from './silversurfer.png';
import ironMan from './IronMan.png';
import blackPanther from './blackpanther.jpg';
import spiderMan from './spiderMan.png';
import wolverine from './wolverine.png';
import {Link} from "react-router-dom";
import HeroProfile from "./HeroProfile";
import joker from "./joker.png";
import superMan from "./superman.png";
import batMan from "./batman.jpg";
import wonderWoman from "./wonderwoman.png";
import greenLantern from "./greenlantern.png";
import johnC from "./johnconstantine.jpg";
import greenArrow from "./greenarrow.png";
import aquaMan from "./aquaman.png";
import bane from "./bane.jpg";
import theFlash from "./flash.jpg";


// const     data = {
//     spiderMan: [ 0, 'Spider Man'],
//     hulk:[ 1,  'hulk'],
//     ironMan: [ 2, 'Iron Man' ],
//     wolverine: [ 3, 'Wolverine'],
//     deadPool: [ 4, 'Deadpool'],
//     blackPanther: [ 5, 'Black Panther',],
//     punisher: [ 6, 'Punisher'],
//     cptnAmerica: [ 7, 'Captain America'],
//     slvrSurfer: [ 8, 'Silver Surfer'],
//     lukeCage: [ 9, 'Luke Cage'],
// }

class SimpleSlider extends Component {


    constructor(props) {
        super(props);
        if (this.props.location.state.Publisher == "Marvel"){
        this.state = {
            Publisher: this.props.location.state.Publisher,
            Character: "",
            items: [
                {
                    id: 0,
                    Title: "Spider Man",
                    selected: false

                },
                {
                    id: 1,
                    Title: "Hulk",
                    selected: false
                },
                {
                    id: 2,
                    Title: "Iron Man",
                    selected: false
                },
                {
                    id: 3,
                    Title: "Wolverine",
                    selected: false
                },
                {
                    id: 4,
                    Title: "Deadpool",
                    selected: false
                },
                {
                    id: 5,
                    Title: "Black Panther",
                    selected: false
                },
                {
                    id: 6,
                    Title: "Punisher",
                    selected: false
                },
                {
                    id: 7,
                    Title: "Captain America",
                    selected: false
                },
                {
                    id: 8,
                    Title: "Silver Surfer",
                    selected: false
                },
                {
                    id: 9,
                    Title: "Luke Cage",
                    selected: false
                },
            ]

        }}
        else if (this.props.location.state.Publisher == "DC") {
            this.state = {
                Publisher: this.props.location.state.Publisher,
                Character: "",
                items: [
                    {
                        id: 0,
                        Title: "Joker",
                        selected: false
                    },
                    {
                        id: 1,
                        Title: "Superman",
                        selected: false
                    },
                    {
                        id: 2,
                        Title: "Batman",
                        selected: false
                    },
                    {
                        id: 3,
                        Title: "Wonder Woman",
                        selected: false
                    },
                    {
                        id: 4,
                        Title: "Green Lantern",
                        selected: false
                    },
                    {
                        id: 5,
                        Title: "John Constantine",
                        selected: false
                    },
                    {
                        id: 6,
                        Title: "Green Arrow",
                        selected: false
                    },
                    {
                        id: 7,
                        Title: "Aquaman",
                        selected: false
                    },
                    {
                        id: 8,
                        Title: "Bane",
                        selected: false
                    },
                    {
                        id: 9,
                        Title: "The Flash",
                        Selected: false
                    },
                ]
            }
        }
    }


    // Method for grabbing id and hero name when hero image btn is selected, having an issue with selcted property being undefined
    // makeHero;
    heroName;



    handleClick = (e) => {
        console.log(e)
        // let items = [...this.state.items];
        //
        // console.log(this.props)
        // const hero = items[id];
        //
        // // items["id"].selected = this.heroName;
        //
        //
        // items.forEach(item => {
        //     if (item.id !== id) {
        //         item.selected = false;
        //     }
        // });
        //
        //
        // this.setState({
        //     items
        // });

    }

    makeHero = (items) => {
        return items.map(item => {
            return <GetInput Item={item} onClick={(e => this.handleClick(item.id, e))} key={item.id}/>
        })
    }


    render() {
        console.log(this.state.Publisher);
        // {this.state.handleClick()}
        // let { handleClick } = this.props;
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

                    <h2 id="Quick-Fix">Hero </h2>
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

                    {/*{this.makeHero(this.state.items)}*/}


                </div>
            );
        }
        else if (this.props.location.state.Publisher == "DC"){
            return (
                <div>

                    <h2 id="Quick-Fix">Hero </h2>
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
                                state: {Character: 'Super Man', Publisher: this.state.Publisher}
                            }}><img className="Hero-Images"
                                    src={superMan}/> </Link>
                        </div>
                        <div>
                            <Link to="/Results" to={{
                                pathname: "/Results",
                                state: {Character: 'Bat Man', Publisher: this.state.Publisher}
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
                                state: {Character: 'John C', Publisher: this.state.Publisher}
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
                                state: {Character: 'Aqua Man', Publisher: this.state.Publisher}
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

                    {/*{this.makeHero(this.state.items)}*/}


                </div>
            );
        }
    }
}

export default SimpleSlider;