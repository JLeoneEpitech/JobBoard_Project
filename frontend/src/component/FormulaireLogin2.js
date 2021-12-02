import React, {  useState } from "react";


import axios from "axios";


const Formulairelogin2 = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);


  

  const HandleSubmit = (e) => {
    e.preventDefault();

   

  

      axios
        .post("http://localhost:3000/api/user/login", {
          email,
          password,
          
        })
        .then((res) => {
          setMessage("Bienvenue "+res.data.username)
          setEmail("");
          setPassword("");
         console.log(res)

         // If login was successful, set the token in local storage
         localStorage.setItem('token', res.data.token);
         localStorage.setItem('userId', res.data.userId);
         localStorage.setItem('username', res.data.username);
            let admin = res.data.admin
         if(admin){window.location.href="/admin";}
         else{
          window.location.href="/";
         }
        
         
         // Dispatch the success action
        // dispatch(receiveLogin(user));
        setError(false) 

        })
        
        .catch((error) => {
          console.log(error.response.data.error);
          setError(true) 
          setMessage(error.response.data.error)
        });



  };

  return (
    <div className="formm">

      <form onSubmit={(e) => HandleSubmit(e)}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          value={email}
        />
        <input
        onChange={(e) => setPassword(e.target.value)}
         type="password" name="password" placeholder="password" 
         value={password}/>
       
        <input type="submit" value="Envoyer" />
      </form>
      <span style={{color: error ? "red" : "green"}}>{message}</span>
     
    </div>
  );
};

export default Formulairelogin2;