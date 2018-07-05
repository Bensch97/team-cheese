import React from 'react';
import { Item } from 'semantic-ui-react';

class Donors extends React.Component {
    render () {
        return (

        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{this.props.name}</Item.Header>
              <Item.Meta>{this.props.phone}
              <br/>
              {this.props.address}</Item.Meta>
              <Item.Description>
                <ul>
              <li>{this.props.manager}</li>
              <li>{this.props.pickup_date}</li>
              <li>{this.props.pickup_time}</li>
              <li>{this.props.pickup_day}</li>
                </ul>
              </Item.Description>
              <Item.Extra></Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

        )
    }
}

class DonorList extends React.Component { 
    state = {
        data: []
    }

    componentDidMount = () => {
        fetch("https://team-cheese-backend.herokuapp.com/all")
            .then(response => response.json())
            .then(data =>  {
            this.setState({data})
            console.log(this.state)
            }
            )      
    }


    render () {
        return (
            <React.Fragment>
                <div className="ui container">
                <div className="ItemFullpage">
                    {this.state.data.map(data => <Donors key={data.id}
                                                    name={data.name}
                                                    address={data.address}
                                                    phone={data.phone}
                                                    manager={data.manager}
                                                    pickup_date={data.pickup_date}
                                                    pickup_time={data.pickup_time}
                                                    pickup_day={data.pickup_day}/>) }
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DonorList;