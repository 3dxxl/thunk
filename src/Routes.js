import React, { Component } from 'react';
import './App.css';

//React Router
import {Link} from 'react-router-dom';



//Semantic UI
import { Menu } from 'semantic-ui-react'



class Routes extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    const { activeItem } = this.state



    return (

        <div>
            <Menu>
              <Menu.Item as={Link} to='/' >
                StartSeite
              </Menu.Item>
              <Menu.Item as={Link} to='/ZweiteSeite' >
                ZweiteSeite
              </Menu.Item>
              <Menu.Item as={Link} to='/DritteSeite' >
                DritteSeite
              </Menu.Item>
            </Menu>

		    </div>

    

    );
  }
}

export default Routes;
