import React, { useEffect, useState } from 'react';
import {Card,Carousel,  }from 'react-bootstrap';
import {   Rate } from 'antd';
import './FullCard.css';
import logo from '../../images/logoBlack.png'
import { useParams } from 'react-router-dom';

function FullCard() {
  const [Details,setDetails] = useState({})
  const params = useParams()
  const  userId  = params;
  console.log(userId)
  
useEffect(()=>{
  fetch(`https://dummyjson.com/products/${userId.id}`)
  .then((res) => res.json())
      .then((data) => {
        setDetails(data)    
        console.log(data)       
        
      })
      // console.log(data) 
      .catch(error => {
          console.error('Error fetching data:', error);
      });
},[])

  return (

<div>
      {Details && (
        <div className='full-card'>
          <div className='lg-img'>
            <div className='img-fluid Slider'>
            <Carousel>
                    {Details.images &&
                      Details.images.map((image, index) => (
                        <Carousel.Item key={index}>
                          {Details.images.length > 1 && (
                            <img
                              src={image}
                              className='slider-img'
                              alt={`Image ${index + 1}`}
                            />
                          )}
                        </Carousel.Item>
                      ))}
                  </Carousel>
            </div>
            <div className='card-2 p-2'>
              <Card>
                <Card.Body variant='light'>
                  <div className='price-main'>
                    <div className='price'>
                      <p>{Details.price}</p>
                    </div>
                    <div className='d-flex gap-3'>
                      <i className="fa-solid fa-share-nodes fa-lg"></i>
                      <i className="fa-regular fa-heart fa-lg"></i>
                    </div>
                  </div>
                  <Card.Text className='product-name'>
                    {Details.title}
                  </Card.Text>
                  <Card.Text className=' '>
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    <span className=''>karachi</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='card-3 p-2'>
              <Card>
                <Card.Body variant='light'>
                  <Card.Title className='bold'>Details</Card.Title>
                  <Card.Text>
                    <div className='d-flex rate'>
                      <div>
                        <span>Rating {Details.rating}</span>
                      </div>
                      <div>
                        <span>
                          <Rate defaultValue={3} allowClear={false} />
                        </span>
                      </div>
                    </div>
                  </Card.Text>
                  <Card.Text>
  <div className='table-responsive'>
    <table className='table'>
      <tbody>
        <tr className='brand'>
          <th className='bold'>Brand</th>
          <td className='pro'>{Details.title}</td>
          <th className='bold'>Price</th>
          <td className='pro'>{Details.price}</td>
          <th className='bold'>Stock</th>
          <td className='pro'>{Details.stock}</td>
        </tr>
      </tbody>
    </table>
  </div>
</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* Use media queries to hide sm-div on small screens */}
          <style>
            {`
              @media (max-width: 767px) {
                .sm-div {
                  display: none;
                }
              }
            `}
          </style>
          <div className='sm-div'>
   
                        <Card className="text-center">
                <div className='profile'>
        <Card.Body>
          <div>
            <img src={logo}   className='profile-logo' />
          </div>

          <div>
        <Card.Title>{Details.title}</Card.Title>
          <Card.Title className='bold'>Description</Card.Title>
          <Card.Text>
             {Details.description}
          </Card.Text>
          <button   className='call-btn'><i className="fa-solid fa-comment-dots fa-lg"></i>chat</button>
          </div>
        </Card.Body>
      </div>
      </Card>
      <Card className="text-center mt-3">
                <div className='profile'>
        <Card.Body>
          <div>
            <img src={logo}   className='profile-logo' />
          </div>

          <div>
        <Card.Title>{Details.title}</Card.Title>
          <Card.Title className='bold'>Location</Card.Title>
          <Card.Text>
             {Details.description}
          </Card.Text>
            <i class="fa-solid fa-location-dot"></i>
            <span>Sadar, Karachi...</span>
           
          </div>
        </Card.Body>
      </div>
      </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default FullCard