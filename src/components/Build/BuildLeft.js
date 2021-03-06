import React, { Component } from 'react';
import './BuildLeft.css'

class BuildLeft extends Component {
    
    render() {
        return (
            <div className="BuildLeft">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>{this.props.title}</h1>
                            <hr />
                            <p>
                                {this.props.description}
                                <br /><br />
                                {this.props.descriptionTwo}
                                <br /><br />
                                {this.props.descriptionThree}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildLeft;
