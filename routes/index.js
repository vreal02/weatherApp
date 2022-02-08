var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();
var request = require('request')
var api = 'bf6ea4403d8d11b4438fbf6be848d881'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/latitud/:latitud/longitud/:longitud', (req, res, next) => {
  // console.log(req.params.latitud, req.params.longitud)

  if (!req.params.latitud || !req.params.longitud){
    res.status(404)
  }

  var latitud = parseInt(req.params.latitud, 10)
  var longitud = parseInt(req.params.longitud, 10)

  request('https://api.openweathermap.org/data/2.5/weather?lat=39.4702&lon=-0.376805&appid=bf6ea4403d8d11b4438fbf6be848d881',{json: true},
  (err, res, body) => {
    if(err) {return console.log(err)}
    console.log(body)
  })

  res.end('Recibido')
})

module.exports = router;
