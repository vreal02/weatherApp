const { default: axios } = require('axios');
var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();
var request = require('request')
var api = 'bf6ea4403d8d11b4438fbf6be848d881'

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/lat/:lat/lon/:lon',async (req, res, next) => {

  if (!req.params.latitud || !req.params.longitud) res.status(404)
  
  var latitud = parseInt(req.params.lat, 10) //39.4702
  var longitud = parseInt(req.params.lon, 10) //-0.37680375

  const peticion = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${api}&units=metric`)
  const data = peticion.data
  res.json(data)
})

module.exports = router;
