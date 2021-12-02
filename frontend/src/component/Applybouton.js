import React, {useState} from 'react';
import axios from "axios";
 
const Applybouton = (props) => {
 const {announces} = props;
 
  const [cacher, setOuvert] = useState(true);
  const [Nom_societe, setNom_societe] = useState("");
  const [Nom_postulant, setNom_postulant] = useState("");
  const [Message, setMessage] = useState("");
  const token = localStorage.getItem('token');
  const [response,setResponse] = useState("")
 
 
 
  const Openform  = () => {
   
   if (token == null){
     setOuvert(!cacher);
   }
   else{
     let username = localStorage.getItem('username')
     let nom_societe = announces.nom_societe  
console.log(username);
console.log(nom_societe);
    
     axios
     .post("http://localhost:3000/api/user/apply", {
       Nom_postulant: username,
       Nom_societe: nom_societe,
       Message: "Apply Request"
   }).then((res) => {
      setResponse(res.data.message)
    //alert("You apply correctly to the job !");
    
   })
  
  
  }
  
     
  };
  const HandleSubmit = (e) => {
   e.preventDefault();
 
       axios
       .post("http://localhost:3000/api/user/apply", {
         Nom_societe,
         Nom_postulant,
         Message,
       
       })
       .then((res) => {
      
         setNom_societe("");
         setNom_postulant("");
         setMessage("");
        console.log(res)
        setResponse(res.data.message)
        //alert('You apply correctly to the job !');
        //setOuvert(!cacher)
      
    });
      
  };
 
   return (
   <div>
 
 
        
   <button className="open-button monbouton" onClick={Openform}>Apply</button>
  
 
 
 
   {cacher ?  '':
   <div className="applyform">
<form onSubmit={(e) => HandleSubmit(e)}>
 <input
   onChange={(e) => setNom_societe(e.target.value)}
   type="text"
   placeholder="Nom de societe"
   value={Nom_societe}
   required
 />
 <input
 onChange={(e) => setNom_postulant(e.target.value)}
  type="text" placeholder="nom postulant"
  value={Nom_postulant} required />
    <input
 onChange={(e) => setMessage(e.target.value)}
  type="text" placeholder="Message"
  value={Message} required />
 <input type="submit" value="Envoyer" />
</form>

 </div>
   }
     
     <div style={{color: "green"}}>{response}</div>
 
     
      
       </div>
    );
 };
 
  export default Applybouton;



/*import React, {useState} from 'react';
import axios from "axios";

  const Applybouton = () => {
    const [cacher, setOuvert] = useState(true);
    const [Nom_societe, setNom_societe] = useState("");
    const [Nom_postulant, setNom_postulant] = useState("");
    const [Message, setMessage] = useState("");

    const Openform  = () => {
        setOuvert(!cacher);
    };

    const HandleSubmit = (e) => {
      e.preventDefault();
  
     
  
    
  
        axios
          .post("http://localhost:3000/api/user/apply/", {
            Nom_societe,
            Nom_postulant,
            Message,
          })
          .then((res) => {
            setNom_societe("");
            setNom_postulant("");
            setMessage("");
           console.log(res)
          });
  
    };





    
    return (
        <div>
        
                          
        <button className="open-button monbouton" onClick={Openform}>Apply</button>




        
        {cacher ?  '':



<div className="formm">

<form onSubmit={(e) => HandleSubmit(e)}>
  <input
    onChange={(e) => setNom_societe(e.target.value)}
    type="text"
    placeholder="Nom de societe"
    value={Nom_societe}
  />
  <input
  onChange={(e) => setNom_postulant(e.target.value)}
   type="text" placeholder="nom postulant" 
   value={Nom_postulant}/>

    <input
  onChange={(e) => setMessage(e.target.value)}
   type="text" placeholder="Message" 
   value={Message}/>
 
  <input type="submit" value="Envoyer" />
</form>


</div>
        
        
        
        
        }
        </div>
    );
  };

  export default Applybouton;*/