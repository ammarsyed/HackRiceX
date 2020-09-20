import React, { Component } from "react";

class Resources extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Resources:</h1>
                <br/>
                <h3><a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">https://www.cdc.gov/coronavirus/2019-ncov/index.html</a></h3>
                <br/>
                <h3><a href="https://www.nih.gov/coronavirus">https://www.nih.gov/coronavirus</a></h3>
                <br/>
                <h3><a href="https://www.webmd.com/coronavirus">https://www.webmd.com/coronavirus</a></h3>
                <br/>
                <h3><a href="https://www.idsociety.org/covid-19-real-time-learning-network/">https://www.idsociety.org/covid-19-real-time-learning-network/</a></h3>
                <br/>
            </div>
        );
    }
}

export default Resources;