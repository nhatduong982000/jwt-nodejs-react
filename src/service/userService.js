import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
  });
  

const hashUserPassword = (userPassword) =>{
    var hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) =>{
    let hashPass = hashUserPassword(password);

     // simple query
    connection.query(
        ' INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username],
        function(err, results) {
            if(err){
                console.log(err)
            }
        console.log(results); // results contains rows returned by server
        }
    );
}

const getUserList = () => {
    let users = [];
    connection.query(
        ' select * from users',
        function(err, results) {
            if(err){
                console.log(err)
            }
        console.log("check results: ",results); // results contains rows returned by server
        }
    );
}

module.exports = {
    createNewUser,
    getUserList
}