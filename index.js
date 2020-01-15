//-- variables to link the inquirer and mySQL database --//
const inquirer = require("inquirer");
var mysql = require("mysql");

//--create the connection information for the sql database--//
var connection = mysql.createConnection({
  host: "localhost",

  //--your port; if not 3306--//
  port: 3306,

  //--your username--//
  user: "root",

  //--your password--//
  password: "may022016",
  database: "employeesDB"
});

// connect to the mysql server and sql database--//
connection.connect(function(err) {
  if (err) throw err;
//--run the start function after the connection is made to prompt the user--//
//--console.log(`connected as id ${connection.threadId}`)--//
  start();
});