import React from 'react'
// import { Nav, Container, Button, Navbar, NavDropdown, InputGroup, Form } from 'react-bootstrap';
import BlueLogo from '../../images/blueLogo.png'
import BlackLogo from '../../images/logoBlack.png'
import Border from '../../images/border remove.png'
import { Input, Select, Space } from 'antd';
import './Header.css'
function NavBar() {
    return (
        <div>

            <div className='head'>
                <div className='d-flex content pt-3 gap-4'>
                    <div className='d-flex gap-4'>
                        <img src={BlueLogo} width={"40px"} className='pl-4' />
                    </div>
                    <div className='motor d-flex'>
                        <i className="fa-solid fa-car"></i>
                        <span>MOTORS</span>
                    </div>
                    <div className='property d-flex'>
                        <i className="fa-solid fa-city"></i>
                        <span>PROPERTY</span>
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <img src={BlackLogo} width={'100px'} />
                    </div>
                    <div>
                        <Select
                            defaultValue="lucy"
                            value="Pakistan"
                            style={{
                                width: '100%', // Full width on small screens
                                maxWidth: '300px', // Limit width on larger screens
                                height: '50px',
                                border: '2px solid #002F34',
                                borderRadius: '10px',
                            }}
                            options={[
                                {
                                    value: 'Current location',
                                    label: 'Current location',
                                },
                            ]}
                        />
                    </div>
                    <div className='d-flex flex-grow-1'>  
                        <input
                            type={"search"}
                            className='searchInput p-3 control flex-grow-1'
                            placeholder='Find Cars, Mobile Phones and More...'
                        />
                        <button className='search'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <span className='login'>Login</span>
                    <div className="sellBtn-con">
                    <img src={Border} width={"100px"} />
                        <div className="sell">
                        <i class="fa-solid fa-plus"></i>   <p  className='text-center mt-3'>SELL</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar