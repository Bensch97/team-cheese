import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Calendar extends Component {
    render() {
        return (
            <div className="fullpage ui container">
                <div className="fullpage">
                    <h1>Calander</h1>
                    <iframe src="https://calendar.google.com/calendar/embed?src=kenzie.academy_ge85jadcdplja9npg09tjblge0%40group.calendar.google.com&ctz=America%2FNew_York" style={{ border: "0", width: "2000", height: "600", frameborder: "0", scrolling: "no" }}></iframe>
                </div>
            </div>
        )
    }
}

export default withRouter(Calendar);