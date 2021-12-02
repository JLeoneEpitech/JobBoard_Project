import React from 'react';
import Navigation from '../component/Navigation';
import CountriesCopy from '../component/CountriesCopy';
import logo from '../style/giphy.gif';
const Home = () => {
 
return (
   <div className="home">
       
       
       <Navigation />
      
       <CountriesCopy />
    
    
       <footer> 
       <div className="gorille">
       <img src={logo} alt="loading..." />
   
       </div>
       </footer>
  
 </div>
)
//com
}
 
export default Home;