import React from 'react';
import './Footer.css';
import BtnImg from '../../images/app store.png'
function Footer() {
  return (
    <>
      <div className='footer  '>
        <div className='row'>
          <div className='col-md-3'>
            <table className='table-footer hover text-center'>
              <thead>
                <tr>
                  <th>POPULAR CATEGORIES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cars</td>
                </tr>
                <tr>
                  <td>Bikes</td>
                </tr>
                <tr>
                  <td>About Dubizzle Group</td>
                </tr>
                <tr>
                  <td>Help</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-md-3'>
            <table className='table-footer hover text-center'>
              <thead>
                <tr>
                  <th>TRANDING SEACRH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flats for rent</td>
                </tr>
                <tr>
                  <td>Watches</td>
                </tr>
                <tr>
                  <td>OLX Blog</td>
                </tr>
                <tr>
                  <td>Sitemap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-md-3'>
            <table className='table-footer hover text-center'>
              <thead>
                <tr>
                  <th>ABOUT US</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mobile phones</td>
                </tr>
                <tr>
                  <td>Books</td>
                </tr>
                <tr>
                  <td>Contact Us</td>
                </tr>
                <tr>
                  <td>Terms of Uses</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-md-3'>
            <table className='table-footer hover text-center'>
              <thead>
                <tr>
                  <th>OLX</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jobs</td>
                </tr>
                <tr>
                  <td>Pats</td>
                </tr>
                <tr>
                  <td>OLX for Businesses</td>
                </tr>
                <tr>
                  <td>Privacy Policy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='d-flex justify-content-center app-btn'>
      <img src={BtnImg}  width={'100px'}/>
      <img src={BtnImg}  width={'100px'}/>
      <img src={BtnImg}  width={'100px'}/>
          
        </div>
      </div>
      <div className='footer-bottom'>
        <div>
          <span>Free Classifieds in Pakistan</span> .2006-2024 OLX
        </div>
      </div>
    </>
  );
}

export default Footer;
