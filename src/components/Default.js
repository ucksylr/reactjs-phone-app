import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                <h1 className="display-3">sayfa bulunamadı.</h1>
                <h1>hata!</h1>
                <h2>aramış olduğunuz url: 
                    "<span className="text-danger">
                        {this.props.location.pathname}
                        </span>" bulunamadı. </h2>
                

            </div>
            </div>
            </div>
        );
    }
}

export default Default;