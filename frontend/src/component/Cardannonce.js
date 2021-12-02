import React, {useState, useEffect} from 'react';
import axios from 'axios';





const Cardannonce = () => {
    const [state, setState] = useState([]);
   
 useEffect(() => {

    axios.get(
        "http://localhost:3000/api/user/annonce"
    )

            .then((res) => {

                console.log(res.data.announces);
                setState(res.data.announces);
            });
 },[]); 




    return (
        <div>
            <div>
            <ul>
              {state.map((announces) => (
                  <div className="list"> 
                  <div className="headcard">
                      <ul>
                  <li> Intitule:  {announces.intitule} </li>
                  <li> SKill: {announces.skill} </li>
                  <li> Salaire:  {announces.salaire} </li>
                  <li> Description: {announces.description} </li>
                  <li> Lieu: {announces.lieu} </li>
                  <li> Contrat: {announces.contrat} </li>
                  <li> Réferent: {announces.referent} </li>

                  </ul>
                  </div>  
                  
                  </div>
                  ))}
            </ul>
        </div>
        </div>
    );
};

export default Cardannonce;