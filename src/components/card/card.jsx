import React from 'react';

import './card.css';

const Card = (props) => {
  const onButtonClick = (data, event) => {
    console.log("onButtonClick -> data", data);
  }
  
  return (
    <div className="card">
    <div className="card-header">
      { props.title }
    </div>
    <div className="card-body">
      <h5 className="card-title">{ props.content }</h5>
      <p className="card-text">{ props.description }</p>
      <button href="#" onClick={onButtonClick.bind(null, props)} className="btn btn-primary">Go somewhere</button>
    </div>
  </div>
  )
}

export default Card;