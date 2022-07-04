import React from 'react';
import './Card.css';
// import IPHONE from './ThreeDPhone';
function AndroidCard() {
  return (
    <div className="card-container">
      <div className='card'>
        <div className='imgBox'>
          {/* <img src='https://www.mindinventory.com/blog/wp-content/uploads/2021/01/IoT-the-future-of-mobile-app-development.png'
            alt='App Development'
          /> */}
          {/* <IPHONE/> */}
        </div>
        <div className='content'>
          <div className='details'>
            <h2>App Development</h2>
            <div>
              <h3>Andrid Studio</h3>
              <h3>React Native</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AndroidCard;
