var data = require('./demo.js').data;
var Sequelize = require('sequelize');
var database = new Sequelize('postgres://quoccuong:@localhost:5432/quoccuong');
//var database = new Sequelize('quoccuong','quoccuong','',{host:'localhost',dialect : 'postgres', port : 5432});
var Todo = database.define('todo', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey :true
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false
    }
}, {
    freezeTableName : true
})

Todo.sync({force : true}).then(function(){
    return data.forEach((function(item) {
        Todo.create({title : item});
    }))

});

module.exports = Todo