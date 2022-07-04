import React from 'react';
import './WebCard.css';
import LAPTOP from './3DLaptop';
function WebCard() {
  return (
    <div className="card-container-web">
      <div className='card-web'>
        <div className='imgBox-web'>
          {/* <LAPTOP/> */}
        </div>
        <div className='content-web'>
          <div className='details-web'>
            <h2>Web Development</h2>
            <div>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebCard;
