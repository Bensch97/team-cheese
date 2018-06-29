import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Image, Item } from 'semantic-ui-react'

class Grouppage extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="fullpage">
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' src='/images/wireframe/image.png' />

                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                    <Image src='/images/wireframe/short-paragraph.png' />
                                </Item.Description>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>

                        <Item>
                            <Item.Image size='tiny' src='/images/wireframe/image.png' />

                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                    <Image src='/images/wireframe/short-paragraph.png' />
                                </Item.Description>
                                <Item.Extra>Additional Details</Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </div>
            </div>
        )
    }
}

export default withRouter(Grouppage);