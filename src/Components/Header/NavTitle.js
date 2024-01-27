import React from 'react'
import { Nav } from 'react-bootstrap'
function NavTitle() {
  return (
    <div>
    <div className='nav-title'>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home /</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Services /</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Web Development/</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Web Development in Punjab/</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Web Development in Lahore/</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Web Development in Karachi</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  </div>
  )
}

export default NavTitle