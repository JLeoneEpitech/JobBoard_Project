import React from 'react';

import ApplyModify from './ApplyModify'
 
const CardUsers = (props) => {
 const {user} = props;
 /*
  const dateParser = (date) => {
 let newDate = new Date(date).toLocaleDateString("fr-FR", {
   year: "numeric",
   month: "long",
   day: "numeric",
  
 
 });
 return newDate;
};
*/
 
   return (
       <div className="user">
       <h1>User {user.id} / {user.username}</h1>
    
       
      
  
       <ApplyModify user={user}/>
     
       </div>
      
 
   );
};
 
export default CardUsers;