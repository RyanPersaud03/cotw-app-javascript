import React from 'react';
import WildLife from '../../data/wildlife';
import './wildcard.css';

const WildCard = () => {
    return (
        <div className="animal-cards-container">
            {WildLife.map((item, index) => (
                <div key={index} className="animal-card">
                    <div className="item animal-name">{item.title}</div>
                    <div className="item animal-img"><img src={item.image} alt={item.title} /></div>
                    <div className="item classlvl">Species Class: {item.classSpecies}</div>
                    {item.dlc && (
                        <div className="item tag-dlc">{item.dlc}</div>
                    )}
                    <div className="item maxDiff">Max Difficulty: {item.maxDifficulty}</div>
                    <div className="item diamond">💎 {item.diamond}</div>
                    {item.greatOne && (
                        <div className="item great-one">Great One: {item.greatOne}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default WildCard;


