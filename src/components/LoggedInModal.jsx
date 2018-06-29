import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LoggedInModal extends React.Component {

    render() {
        return (
            <Modal open={this.props.loggedIn}>
                <Header icon='check' content='Nice!' />
                <Modal.Content>
                    <p>You've successfully logged in!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Link to="/navigation/home"><Button color='green' inverted><Icon name='checkmark' /> Go to your page.</Button> </Link>
                </Modal.Actions>
                <br/>
            </Modal>
        );
    };
};

export default LoggedInModal;