import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BoutonUpdate from './BoutonUpdate';





const Carduser2 = () => {
    const [state, setState] = useState([]);
   
 useEffect(() => {

    axios.get(
        "http://localhost:3000/api/user/user"
    )

            .then((res) => {

                console.log(res.data.user);
                setState(res.data.user);
            });
 },[]); 




    return (
        <div>
            <div>
            <ul>
              {state.map((user) => (
                  <div className="list"> 
                  
                  <li> {user.username} </li>
                  <li> {user.email} </li>
                  <li> {user.password} </li>
                  <li> {user.isAdmin} </li>
                  <li> {user.bio} </li>
                
                    <BoutonUpdate />
                    <button>delete</button>
                  </div>
                  ))}
            </ul>
            
        </div>
        </div>
    );
};

export default Carduser2;