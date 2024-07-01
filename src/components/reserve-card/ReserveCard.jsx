import React from 'react';
import './reservecard.css';

const ReserveCard = () => {
    return (
       <div className='reserve-card'>
        <div className='item reserve-name'>Title</div>
        <div className='item reserve-img'><img src='https://picsum.photos/100/100'/></div>
        <div className='item tag-div'>🎯 9</div>
        <div className='item map-icon'>🗺️</div>
       </div>
    );
};

export default ReserveCard;