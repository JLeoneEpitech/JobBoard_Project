const models = require('../models');
var bcrypt    = require('bcrypt');
var jwtUtils  = require('../utils/jwt.utils');
var asyncLib  = require('async');
//const mysql = require('mysql');
//const { Sequelize } = require('sequelize');




// Constants
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

// Routes
module.exports = {
  register: function(req, res) {
    
    // Params
    var email    = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var bio      = req.body.bio;

    if (email == null || username == null || password == null) {
      return res.status(400).json({ 'error': 'missing parameters' });
    }

    if (username.length >= 13 || username.length <= 4) {
      return res.status(400).json({ 'error': 'wrong username (must be length 5 - 12)' });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ 'error': 'email is not valid' });
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ 'error': 'password invalid (must length 4 - 8 and include 1 number at least)' });
    }

    asyncLib.waterfall([
      function(done) {
        //trouer un user grace a son email
        models.User.findOne({
          attributes: ['email'],
          where: { email: email }
        })
        .then(function(userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
      },
      function(userFound, done) {
        if (!userFound) {
          bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
            done(null, userFound, bcryptedPassword);
          });
        } else {
          return res.status(409).json({ 'error': 'user already exist' });
        }
      },
      function(userFound, bcryptedPassword, done) {
        var newUser = models.User.create({
          email: email,
          username: username,
          password: bcryptedPassword,
          bio: bio,
          isAdmin: 0
        })
        .then(function(newUser) {
          done(newUser);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'cannot add user' });
        });
      }
    ], function(newUser) {
      if (newUser) {
        return res.status(201).json({
          'userId': newUser.id,
          'username': newUser.username,
          'message': "New user create"
          
        });
       
      } else {
        return res.status(500).json({ 'error': 'cannot add user' });
      }
    });
  },
  login: function(req, res) {
    
    // Params
    var email    = req.body.email;
    var password = req.body.password;

    if (email == null ||  password == null) {
      return res.status(400).json({ 'error': 'missing parameters' });
    }

    asyncLib.waterfall([
      function(done) {
        models.User.findOne({
          where: { email: email }
        })
        .then(function(userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
      },
      function(userFound, done) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
            done(null, userFound, resBycrypt);
          });
        } else {
          return res.status(404).json({ 'error': 'user not exist in DB' });
        }
      },
      function(userFound, resBycrypt, done) {
        if(resBycrypt) {
          done(userFound);
        } else {
          return res.status(403).json({ 'error': 'invalid password' });
        }
      }
    ], function(userFound) {
      if (userFound) {

        console.log("Success!");
        return res.status(201).json({
          'userId': userFound.id,
         'token': jwtUtils.generateTokenForUser(userFound),
         'username': userFound.username,
         'admin': userFound.isAdmin
          
        });
      } else {
        return res.status(500).json({ 'error': 'cannot log on user' });
      }
    });
  },
  test: function(req, res) {
    res.json({
      userlist:["user1","user2"]
  });
},
annonce: async function(req, res) {
 
  const announces = await models.Announces.findAll();
  console.log(announces);
  return res.status(201).json({announces});
  
},
user: async function(req, res) {
  const user = await models.User.findAll();
  console.log(user);
  return res.status(201).json({"user": user});
  },   
getUserProfile: function(req, res) {
  // Getting auth header
  var headerAuth  = req.headers['authorization'];
  var userId      = jwtUtils.getUserId(headerAuth);

  if (userId < 0)
    return res.status(400).json({ 'error': 'wrong token' });

  models.User.findOne({
    attributes: [ 'id', 'email', 'username', 'bio' ],
    where: { id: userId }
  }).then(function(user) {
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json({ 'error': 'user not found' });
    }
  }).catch(function(err) {
    res.status(500).json({ 'error': 'cannot fetch user' });
  });
},
apply: function(req, res) {

    // Params
    var nom_societe = req.body.Nom_societe ;
    var nom_postulant  = req.body.Nom_postulant;
    var message = req.body.Message;

    console.log(nom_societe);
    console.log(nom_postulant);
    console.log(message);
    
    asyncLib.waterfall([
     
     
      function(done) {
        var newUser = models.Anhistorique.create({
          nom_societe: nom_societe,
          nom_postulant: nom_postulant,
          message: message,
        })
        .then(function(newUser) {
          done(newUser);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': err });
        });
      }
    ], function(newUser) {
      if (newUser) {
        return res.status(201).json({
          'userId': newUser.id,
          'message':"vous avez bien postuler"
          
        });
       
      
      } else {
        return res.status(500).json({ 'error': 'cannot add user' });
      }
    });
   },
   AddAnnonce: function(req, res) {

    // Params
    var nom_societe = req.body.nom_societe ;
    var skill  = req.body.skill;
    var intitule = req.body.intitule;
    var salaire = req.body.salaire;
    var description = req.body.description;
    var lieu = req.body.lieu;
    var referent = req.body.referent;
    var contrat = req.body.contrat;

    console.log(nom_societe);
    console.log(skill);
    console.log(intitule);
    console.log(salaire);
    console.log(description);
    console.log(lieu);
    console.log(referent);
    console.log(contrat);

    
    asyncLib.waterfall([
     
     
      function(done) {
        var newAnnonce = models.Announces.create({
          nom_societe: nom_societe,
          skill: skill,
          intitule: intitule,
          salaire: salaire,
          description: description,
          lieu: lieu,
          referent: referent,
          contrat: contrat
        })
        .then(function(newAnnonce) {
          done(newAnnonce);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': err });
        });
      }
    ], function(newAnnonce) {
      if (newAnnonce) {
        return res.status(201).json({
          'message': "new announces create"
          
        });
       
      
      } else {
        return res.status(500).json({ 'error': 'cannot add announce' });
      }
    });
   },
   
   AddHistorique: function(req, res) {

    // Params
    var nom_societe = req.body.nom_societe ;
    var nom_postulant  = req.body.nom_postulant;
    var message = req.body.message;

    console.log(nom_societe);
    console.log(nom_postulant);
    console.log(message);
    
    asyncLib.waterfall([
     
     
      function(done) {
        var newHistorique = models.Anhistorique.create({
          nom_societe: nom_societe,
          nom_postulant: nom_postulant,
          message: message
        })
        .then(function(newHistorique) {
          done(newHistorique);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': err });
        });
      }
    ], function(newHistorique) {
      if (newHistorique) {
        return res.status(201).json({
          'message': "new historique create"
          
        });
       
      
      } else {
        return res.status(500).json({ 'error': 'cannot add historique' });
      }
    });
   },
   historique: async function(req, res) {
 
    const historique = await models.Anhistorique.findAll();
    console.log(this.historique);
    return res.status(201).json({historique});
    
  },
  
   
}

