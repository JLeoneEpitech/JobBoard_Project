import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'


const Navigation = () => {
    
    const [loggin, setLogin] = useState(false);

    useEffect(() => {
        let con = localStorage.getItem('token')
        if(con){setLogin(true)}
    },[]);
const Loggout = () => {
    localStorage.clear();
    
    
    window.location.href="/";
   
}

   


    return (
        <div className="navigation">
        <div className="gauche">

            <NavLink exact to="/"  className="logo">
            <Logo />
             </NavLink>
            <div className="navleft">
              
            
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>

            </div>

            
            
            </div>

            <div className="navrigth">
            {loggin ?
            <div>
            <NavLink exact to="/" onClick={Loggout} >
            Deconnexion
            </NavLink> 
            <span className="username">{localStorage.getItem("username")}</span>
            </div>
            
            :
            
            ""
            
            }
            {loggin? "" :
            <div>
            <NavLink exact to="/login" activeClassName="nav-active">
                Connexion
            </NavLink>
            <NavLink exact to="/register" activeClassName="nav-active">
                Inscription
            </NavLink>
            </div>
           

            }
              </div>
            
            
            
            
            

            


            
           
            
            
        </div>
    );

    


    



};

export default Navigation;