import React, {  useState } from "react";


import axios from "axios";


const AddAnnonce = () => {

  const [nom_societe, setNom_societe] = useState("");
  const [skill, setSkill] = useState("");
  const [intitule, setIntitule] = useState("");
  const [salaire, setSalaire] = useState("");
  const [description, setDescription] = useState("");
  const [lieu, setLieu] = useState("");
  const [referent, setReferent] = useState("");
  const [contrat, setContrat] = useState("");
  const [response, setResponse] = useState("");

  

  const HandleSubmit = (e) => {
    e.preventDefault();

 
   

  
  
  
  
  
  

      axios
        .post("http://localhost:3000/api/user/annonce", {
          nom_societe,
          skill,
          intitule,
          salaire,
          description,
          lieu,
          referent,
          contrat,
          
        })
        .then((res) => {
          setNom_societe("");
          setSkill("");
          setIntitule("");
          setSalaire("");
          setDescription("");
          setLieu("");
          setReferent("");
          setContrat("");
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
        <h2>Add  user </h2>
      <form onSubmit={(e) => HandleSubmit(e)}>

      <input
         onChange={(e) => setNom_societe(e.target.value)}
         type="text" name="Nom_societe" placeholder="Nom de la société" 
         value={nom_societe}/>

        <input
          onChange={(e) => setSkill(e.target.value)}
          type="text"
          placeholder="SKills"
          value={skill} />


        <input
        onChange={(e) => setIntitule(e.target.value)}
         type="text" name="intitule" placeholder="intitule" 
         value={intitule}/>
         
         <input
        onChange={(e) => setSalaire(e.target.value)}
         type="text" name="salaire" placeholder="salaire" 
         value={salaire}/>

        <input
        onChange={(e) => setDescription(e.target.value)}
         type="text" name="description" placeholder="description" 
         value={description}/>

         <input
        onChange={(e) => setLieu(e.target.value)}
         type="text" name="lieu" placeholder="lieu" 
         value={lieu}/>

        <input
        onChange={(e) => setReferent(e.target.value)}
         type="text" name="referent" placeholder="referent" 
         value={referent}/>
         
         <input
        onChange={(e) => setContrat(e.target.value)}
         type="text" name="contrat" placeholder="contrat" 
         value={contrat}/>

            
        <input type="submit" value="Envoyer" />
      </form>
      
     
      <span style={{color: "green"}}>{response}</span>
     
    </div>
  );
};
export default AddAnnonce;

