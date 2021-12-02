import React, {useState, useEffect} from 'react';
import axios from 'axios';





const CardHisotrique = () => {
    const [state, setState] = useState([]);
   
 useEffect(() => {

    axios.get(
        "http://localhost:3000/api/user/historique"
    )

            .then((res) => {

                console.log(res.data.historique);
                setState(res.data.historique);
            });
 },[]); 




    return (
        <div>
            <div>
            <ul>
              {state.map((historique) => (
                  <div className="annonce"> 
                  <div className="headcard">
                  <li> {historique.nom_societe} </li>
                  <li> {historique.nom_postulant} </li>
                  <li> {historique.message} </li>
                  </div>  
                  
                  </div>
                  ))}
            </ul>
        </div>
        </div>
    );
};

export default CardHisotrique;