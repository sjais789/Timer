import React, { Component } from 'react';

import './App.css';

        class Appify extends React.Component
{
    constructor(props) {

        super(props);

        this.state = {


            s: 0
        }
    this.increase= this.increase.bind(this);
    }
    increase()
        {
            this.setState({s:this.state.s+2000});


        }
    componentDidMount()
{

        setInterval(this.increase,2000);

}

        render()
        {
                return<h1> {this.state.s}</h1>;


        }
}



class Changecolor extends React.Component {
    render() {
        var commonStyle = {
            margin: 0,
            padding: 0
        };

        var divStyle = {
            width: 1400,
            textAlign: "center",
            backgroundColor: "#8692D4",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#",
            borderRadius: 10
        };

        var textStyles = {
            emphasis: {
                fontSize: 38,
                ...commonStyle
            },
            smallEmphasis: {
                ...commonStyle
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        };

        return (
            <div style={divStyle}>
                <Appify/>
                <h2 style={textStyles.smallEmphasis}></h2>
                <h2 style={textStyles.emphasis}>Hi!</h2>
                <p style={textStyles.small}>(Magic happens after every 2 sec :P)</p>
            </div>
        );
    }}

export default Changecolor;

