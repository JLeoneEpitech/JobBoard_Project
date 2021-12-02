import React, {useState} from 'react';

const ApplyModify = (props) => {
 const {user} = props;
 
 
  const [cacher, setOuvert] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Openform  = () => {
      setOuvert(!cacher);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
  
 
    /*axios.update('http://localhost:3000/api/user/user', {
     username: username,
     email: email,
     password: password 
   })
   .then(response => {
     alert('updated !')
     console.log(response);
   })*/
   };
 
   return (
      <div>
    
                      
      <button className="open-button monbouton" onClick={Openform}>Update</button>
 
    
      {cacher ?  '':
<div className="applyModify">
<form onSubmit={(e) => HandleSubmit(e)}>
  username
 <input
   onChange={(e) => setUsername(e.target.value)}
   type="text"
   placeholder={user.username}
   value={username}
 />
 Email
 <input
 onChange={(e) => setEmail(e.target.value)}
  type="text" placeholder={user.email}
  value={email}/>
 Password
   <input
 onChange={(e) => setPassword(e.target.value)}
  type="text" placeholder={"[Crypted_Password]"}
  value= {password}/>
<input type="submit" value="Update" />
</form>
 
</div>
     
     
     
     
       }
       </div>
   );
 };
  export default ApplyModify ;