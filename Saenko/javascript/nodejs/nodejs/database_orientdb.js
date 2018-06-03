var OrientDB = require('orientjs');

var server = OrientDB({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: ''
});

var db = server.use('o2');
/*
console.log('Using database: ' + db.name);
db.record.get('#18:0').then(function (record) {
    console.log('Loaded record:', record);
});
*/

// CREATE
/*
var sql = 'SELECT FROM topic';
db.query(sql).then(function(results){
    console.log(results);
});
*/

/*
var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
    params:{
        rid:'#18:0'
    }
};
db.query(sql, param).then(function(results){
    console.log(results);
});
*/

// READ
// INSERT
/*
var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";
var param = {
    params:{
        title:'Express',
        desc:'Express is framework for web'
    }
};
db.query(sql, param).then(function(results) {
    console.log(results);
})
*/

// UPDATE
/*
var sql = "UPDATE topic SET title=:title WHERE @rid=:rid";
db.query(sql, {params:{title:'Expressjs', rid:'#18:1'}}).then(function(results){
    console.log(results);
})
*/

// DELETE
var sql = 'DELETE FROM topic WHERE @rid=:rid';
db.query(sql, {params:{rid:'#18:1'}}).then(function(results){
    console.log(results);
})
// CRUD

