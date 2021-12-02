const express = require('express');
const Router = express.Router();
const userCtl = require('../controllers/userctrl');
const auth = require('../middleware/auth');


Router.get('/',function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>requette user</h1>');
  
});


Router.post('/register/',userCtl.register);
Router.post('/login/',userCtl.login);
Router.post('/apply/',userCtl.apply);
Router.post('/annonce/',userCtl.AddAnnonce);
Router.post('/historique/',userCtl.AddHistorique);




//Router.post('/logout/',userCtl.logout);
Router.get('/test/',auth,userCtl.test);
Router.get('/annonce/',userCtl.annonce);
Router.get('/me',auth,userCtl.getUserProfile);
Router.get('/user/',userCtl.user);
Router.get('/historique',userCtl.historique);
    



module.exports = Router;