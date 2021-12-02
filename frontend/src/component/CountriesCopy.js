 
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardUsers from "./CardUsers"
import Card from "./Card"
import CardHisotrique from './CardHisotrique';
import Carduser2 from './Carduser2';
import Cardannonce from './Cardannonce';
import Adduser from './AddUser';
import AddAnnonce from './AddAnnonce';
import AddHistorique from './AddHistorique';
 
 
 
 
 
const CountriesCopy = () => {
  
  
   return (
       <div>
           
                <h1 className="titlecard">List of all users</h1>
                <Adduser />
                <Carduser2 />
                <h1  className="titlecard">List of all Apply</h1>
                <AddHistorique />
                 <CardHisotrique/>
                 <h1  className="titlecard">List of all annonce</h1>
                 <AddAnnonce />
                 <Cardannonce />
       </div>
   );
};
 
export default CountriesCopy;














/*


 const [state, setstate] = useState([]);
   const [announce, setAnnounce] = useState([]);
 
    
 
useEffect(() => {
   axios.get(
       "http://localhost:3000/api/user/user"
           )
   .then((res) => setstate(res.data.user));


   axios.get(
       "http://localhost:3000/api/user/annonce"
           )
   .then((res) => setAnnounce(res.data.announces));
 
 
},[]);



 <ul>
             {state.map((user) => (
                 <CardUsers user={user} key={user.id}/>
                 ))}
                
           </ul> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <h1  className="titlecard">List of all Announces</h1>
           {announce.map((announces) => (
                 <Card announces={announces} key={announces.id}/>
                 ))}
*/
