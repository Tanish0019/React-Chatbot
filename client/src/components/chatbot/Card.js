import React from "react";

const Card = props => (
  <div style={{ float: "left", width: 100, marginRight: 20}}>
    <div className="card" style={{paddingTop: 10}}>
      <div className="card-image" style={{ width: 50, height: 50, margin: '0 auto'}}>
        <img
          alt={props.payload.fields.header.stringValue}
          src={props.payload.fields.image.stringValue}
        />
      </div>
      <div className="card-content" style={{fontSize: 15, textAlign: 'center'}}>
        <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>
          {props.payload.fields.description.stringValue}
        </a>
      </div>
    </div>
  </div>
);

export default Card;
