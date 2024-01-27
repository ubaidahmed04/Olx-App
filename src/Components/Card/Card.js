import { Button, Card, Form, SplitButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Input, Select, Space ,Slider} from 'antd';
import './Card.css';
import Product from './Product';

// import product1 from '../../images/product1.jpeg'

function Cards() {
    return (
        <>

            <div className='d-flex'>
                <hr />
                <div width={"70%"} className='card-main-div'>
                    <div className='context d-flex  '>
                        <div className='bg-ads'>
                            <span className=''>1,302 ads</span>
                        </div>
                        <div className='view '>
                            <span>VIEW</span>
                            <span><i class="fa-solid fa-bars fa-lg"></i></span>
                            <span><i class="fa-solid fa-boxes-stacked fa-xl"></i></span>
                            <span className='line'></span>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="light">SORT BY:</Button>

                                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Newly First</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Old First</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Recently Uploaded</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                    <hr/>
                          <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                
                </div>
            </div>
        </>
    );
}

export default Cards;