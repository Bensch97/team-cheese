import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DonationForm from './DonationForm'

class Userhome extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="fullpage">
                    <h1>Homepage</h1>

                    <DonationForm />
                </div>
            </div>
        )
    }
}

export default withRouter(Userhome);