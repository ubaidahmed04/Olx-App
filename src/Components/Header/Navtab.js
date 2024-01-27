import React from 'react'
import { Select } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown'

function Navtab() {
  return (
    <>
    <div className="Navtab">
       <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div>Mobilephones</div>
    <div>Cars</div>
    <div>Motorcyles</div>
    <div>Houses</div>
    <div>Video-Audios</div>
    <div>Tablets</div>
    <div>Land & Plots</div>
    </div>
    </>
  )
}

export default Navtab