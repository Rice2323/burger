var connection = require("./connection.js");


var orm = { 
    selectAll: function(cb){
        connection.query('SELECT * FROM burgers', function (err, res) {
            if (err) throw err;
            cb(res);
          });
      
        },

    insertOne: function(cb){
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        },
        function(err, res){
            if (err)
            throw err;
            cb(res);
        });
    },

    updateOne: function(burger, cb){
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burger}], function (err, res) {
            if (err)
            throw err;
            cb(res);
        });
    }};

    module.exports = orm;
