import React, {  useState } from "react";


import axios from "axios";


const AddHistorique = () => {

  const [nom_societe, setNom_societe] = useState("");
  const [nom_postulant, setNom_postulant] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  

  const HandleSubmit = (e) => {
    e.preventDefault();

 
   

  
  
  
  
  
  

      axios
        .post("http://localhost:3000/api/user/historique", {
          nom_societe,
          nom_postulant,
          message
          
        })
        .then((res) => {
          setNom_societe("");
          setNom_postulant("");
          setMessage("");
          setResponse(res.data.message)


        
         console.log(res)
         //alert(res.data.message)
        })
        .catch((error) => {
          console.log(error.response.data.error);
        
        })

      }



  return (
    <div className="formm">
        <h2>Add  Historique </h2>
      <form onSubmit={(e) => HandleSubmit(e)}>

      <input
         onChange={(e) => setNom_societe(e.target.value)}
         type="text" name="Nom_societe" placeholder="Nom de la société" 
         value={nom_societe}/>

        <input
          onChange={(e) => setNom_postulant(e.target.value)}
          type="text"
          placeholder="Nom_Postulant"
          value={nom_postulant} />


        <input
        onChange={(e) => setMessage(e.target.value)}
         type="text" name="message" placeholder="message" 
         value={message}/>

            
        <input type="submit" value="Envoyer" />
      </form>
      
     <span style={{color: "green"}}>{response}</span>

     
    </div>
  );
};
export default AddHistorique;

