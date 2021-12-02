import React, {useState} from 'react';



const ReadMore = (props) => {
    const {announces} = props;
    console.log(announces.description)

    const text = "Description : " + announces.description + " |  Lieu : " + announces.lieu + " |  Contrat : " + announces.contrat 
     
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
      console.log(text);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 15) : text}
        <span  onClick={toggleReadMore} className="read-or-hide monbouton2">
          {isReadMore ? "...En savoir plus" : " Réduire"}
        </span>
      </p>
    );
  };

  export default ReadMore;