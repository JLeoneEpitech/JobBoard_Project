import React from 'react';
import ReadMore from './ReadMore';
import Applybouton from './Applybouton';



const Card = (props) => {
    const {announces} = props;


    const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric", 
    });
    return newDate;
  };

    return (
        <div className="annonce"> 
        <div className="headcard">
        <h2> {announces.intitule} </h2>
        <em>Posté le {dateParser(announces.createdAt)}</em>
        </div>  
        <ReadMore announces={announces} />
        <Applybouton announces={announces} />
        </div>
    );
};

export default Card;