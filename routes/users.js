var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/me", function(req, res, next){
  res.json({
    id:1,
    nama: "sapto",
    alamat: "Pekalongan"
  })
}) 

router.post("/post", function(req, res, next){
  res.json({
    id:1,
    nama: "sapto x",
    alamat: "Pekalongan x"
  })
}) 

module.exports = router;
