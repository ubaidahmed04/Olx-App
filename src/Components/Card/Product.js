import React, { useEffect, useState } from 'react'; 
// import product1 from '../../images/product1.jpeg'
import { Card } from 'react-bootstrap'
import { Spin } from 'antd';
// import Details from './Details';
import {  Link } from 'react-router-dom';
import './Card.css'
 
async function fetchData(offset, limit) {
    try {
      const response = await fetch(`https://dummyjson.com/products?offset=${offset}&limit=${limit}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  function Product() {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 7;
  
    useEffect(() => {
        const fetchDataAsync = async () => {
          setLoading(true);
    
          try {
            const result = await fetchData(offset, limit);
            setProductData((prevData) => [...prevData, ...result.products]);
          } finally {
            setLoading(false);
          }
        };
    
        fetchDataAsync();
      }, [offset]);
  
    const handleLoadMore = () => {
      setOffset((prevOffset) => prevOffset + limit);
    };
    return (
        <div>
            {/* <div className='p-2 pb-3'> */}
                {productData && productData.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} style={{textDecoration: 'none'}}>
                        <div className='pt-3'>
                        <Card style={{ width: '100%' }}>
        <div className="row">
          <div className="col-lg-4">
            <Card.Img variant="top" src={product.thumbnail} alt={product.name} className="product-img" />
          </div>
          <div className="col-lg-8">
            <Card.Body>
              <Card.Title>
                <div className='d-flex price-div'>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                  </div>
                  <div>
                    <i className="fa-solid fa-heart mb-3"></i>
                  </div>
                </div>
              </Card.Title>
              <div>
                <Card.Text>
                  <span className='light'>Karachi, Bahadurabad Townhouses. 2 days ago</span>
                </Card.Text>
              </div>
              <div className='d-flex gap-3 mt-3'>
                <div>
                  <button className="call-btn">
                    <span className='m-2'><i className="fa-solid fa-phone-volume fa-lg"></i></span>
                    Call
                  </button>
                </div>
                <div>
                  <button className="chat-btn">
                    <span className='m-2'><i className="fa-solid fa-comment-dots fa-lg"></i></span>
                    Chat
                  </button>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
                        </div>
                    </Link>
                ))}
                 {productData.length > 0 && (
        <div className='text-center mt-3'>
          <button className='load-more-btn call-btn' onClick={handleLoadMore}>
            Load More  <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
      )}
      {loading && (
        <div className='text-center mt-3'>
          <Spin tip='Loading' size='large' />
        </div>
      )}
      {productData.length > 0 && !loading && (
        <div className='text-center mt-3'>
          <button className='load-more-btn call-btn' onClick={handleLoadMore}>
            Load More <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      )}
            </div>
        // </div>
    )
}

export default Product