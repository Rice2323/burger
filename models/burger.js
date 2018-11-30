var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res)
        });
    },
    create: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
            cb(res);
        });
    },
    update: function(burgerId, cb){
        orm.updateOne(burgerId, function(res){
            cb(res);
        });
    }
};

module.exports = burger;