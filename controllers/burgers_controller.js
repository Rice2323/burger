var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
             burgers: data 
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
    });
});

router.post("/burger/create", function(req, res){
    burger.create(req.body.burger_name, function(){
        res.redirect('/index');
    });
});

router.post("/burger/create/:id", function(req, res){
    burger.update(req.params.id, function(){
        res.redirect("index");
    });
});

module.exports = router;