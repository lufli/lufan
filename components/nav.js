import React from 'react'
import { Container, Dropdown, Menu } from 'semantic-ui-react'

const Nav = (props) => {

  return (
    <Menu inverted className="nav-menu" style={{borderRadius: 0, margin: 0}}>
      <Container>
        <Menu.Item name='home' href='/' />
        <Menu.Item name='posts' href='/posts' />
        <Menu.Item name='about' href='/about' />
        <Dropdown item text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}

export default Nav
