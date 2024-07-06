import React from 'react';
import Reserve from '../../data/reserve';
import './reservecard.css';

const ReserveCard = () => {
    return (
        <div className="reserve-cards-container">
            {Reserve.map((item, index) => (
                <div key={index} className="reserve-card">
                    <div className="item reserve-name">{item.title}</div>
                    <div className="item reserve-img"><img src={item.image} alt={item.title} /></div>
                    <div className="item tag-div">🎯 {item.number}</div>
                    <div className="item tag-dlc">{item.dlc}</div>
                    <div className="item map-icon">🗺️</div>
                </div>
            ))}
        </div>
    );
};
export default ReserveCard;