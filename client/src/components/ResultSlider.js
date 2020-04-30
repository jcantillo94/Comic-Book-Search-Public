import React, {Component} from "react";
import Slider from "react-slick";
import ser1 from './series1.jpg';
import ser2 from './series2.jpg';
import ser3 from './series3.jpg';
import ser4 from './series4.jpg';
import ser5 from './series5.jpg';
import {Link} from "react-router-dom";

// let myMap = new Map();

export default class ResultSlider extends Component {

    myMap = new Map();
    temp = [];
    charName;
    image;
    issue_cover_id;
    series;
    // renderedOnce = true;


    constructor(props) {
        super(props);
        this.state = {
            list: this.props.List,
            Character: this.props.Character,
            renderedOnce: false,
            items: [
                {
                    id: 0,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 1,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 2,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 3,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 4,
                    Title: this.charName,
                    selected: false
                },

            ]
        }
        this.renderSeries = this.renderSeries.bind(this);
    }

    // componentDidMount() {
    //     this.setState({renderedOnce: true})
    // }
    //
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        console.log(this.props)
        if (this.props === nextProps) {
            return false;
        } else {
            return true;
        }
    }

    // Method for grabbing id and hero name when hero image btn is selected, having an issue with selcted property being undefined
    //
    // handleClick = (id) => {
    //     let items = [...this.state.items];
    //
    //
    //     items.selected.id = charName;
    //
    //     this.setState({
    //         items
    //     });
    //
    // }

    renderSeries() {
        for (let [k, v] of this.myMap) {
            this.temp = v
            console.log(k, v);
            console.log(Math.floor(Math.random() * (this.temp.length)));

            this.issue_cover_id = this.temp[Math.floor(Math.random() * (this.temp.length))]
            this.image = require('./issue_covers/' + this.issue_cover_id + '.jpg');
            return (
                <div>
                    <button>
                        <img className="Hero-Images" src={this.image}/>
                    </button>
                </div>
            )
        }
    }

    render() {

        {
                this.props.List.map(s => {
                    // console.log(s.series_id + " " + s.id + " " + this.myMap.has(s.series_id))
                    if (this.myMap.has(s.series_id) == false) {
                        this.temp.push(s.id)
                        this.myMap.set(s.series_id, this.temp);
                        this.temp = []
                    } else {
                        {
                            this.myMap.get(s.series_id).map(s => this.temp.push(s))
                        }
                        this.temp.push(s.id)
                        this.myMap.set(s.series_id, this.temp)
                        this.temp = []
                    }
                })
        }

        // for (let [k, v] of this.myMap) {
        //     this.temp = v
        //     console.log(k, v);
        //     console.log(Math.floor(Math.random() * (this.temp.length)));
        //
        //     this.issue_cover_id = this.temp[Math.floor(Math.random() * (this.temp.length))]
        //     this.image = require('./issue_covers/' + this.issue_cover_id + '.jpg');
        //     return (
        //         <div>
        //             <button>
        //                 <img className="Hero-Images" src={this.image}/>
        //             </button>
        //         </div>
        //     )
        // }

        // {this.myMap.values().map(s => {
        //     console.log(s)
        // })
        // }


        // this.myMap.set("dog", 3)

        console.log(this.myMap);

        // {
        //     this.props.List.map(s => {
        //         console.log(s)
        //     })
        // }


        // console.log(this.state.List);

        // const imagesElements = this.state.list.map( e => {
        //     return (
        //         <h1> HI </h1>
        //         // {/*<button onClick={this.handleClick} to="/Results"><img className="Hero-Images"*/}
        //         // {/*                                                      src={ser1}/>*/}
        //         // {/*</button>*/}
        //         // <img src={`${e.id}.jpg`} />
        //     )
        // });

        // console.log(this.props.List);
        // console.log(this.state.list);
        // var object = JSON.parse(this.props.List);
        // console.log(object);
        // console.log(this.state.Character);

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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

        return (
            <div>
                {/*<h2 id="Quick-Fix">Series Covers</h2>*/}
                <Slider className="Result-Slider" {...settings}>
                    {this.renderSeries()}
                    {/*{this.myMap.values().map(s => {*/}
                    {/*    this.issue_cover_id = s[0];*/}
                    {/*    this.image = require('./issue_covers/' + this.issue_cover_id + '.jpg');*/}
                    {/*    return (*/}
                    {/*        <div key={s.id}>*/}
                    {/*            <button>*/}
                    {/*                <img className="Hero-Images" src={this.image}/>*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*})}*/}
                    {/*{this.props.List.map(s => {*/}
                    {/*    this.issue_cover_id = s.id;*/}
                    {/*    this.image = require('./issue_covers/' + this.issue_cover_id + '.jpg');*/}
                    {/*    return (*/}
                    {/*    <div key={s.id}>*/}
                    {/*        <button>*/}
                    {/*    <img className="Hero-Images" src={this.image}/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*    )*/}
                    {/*})}*/}
                </Slider>
            </div>
        );
    }
}
