const jwt = require('jsonwebtoken');
const DBConnection = require('../../db');
const db = new DBConnection();



exports.getAllMovies = (req, res, next) => {

    const sql = "SELECT * FROM my_movies_list";

    db.connection.query(sql, (err, rows, fields) => {
        if (err) {
            //res.status(404);
            console.log('error');
        } else {
            res.send(rows);
        }

    });
}

exports.addMovieToDB = (req, res, next) => {

    console.log(req.body);
    
    let title = req.body.Title;
    let year = req.body.Year;
    let poster = req.body.Poster;
    let imdbID = req.body.imdbID;

    const sql = "INSERT INTO `my_movies_list`(`Title`, `Year`, `Poster`, `imdbID`) VALUES (?,?,?,?)";

    db.connection.query(sql,[title , year , poster , imdbID], (error, results, fields) => {

        if (error) {
            throw error;
       
        } else {

            res.send(results)
        }

    })
}

exports.login = (req, res, next) => {
    
    const email = req.body.email;
    let pw = req.body.password
    console.log(email);

    const sql = "SELECT * FROM `users` WHERE email = ?"

    db.connection.query(sql, [email], (error, results, fields) => {

        if (error) {
            throw error;
        } else {
            
            if(results.length < 1){
                res.send({message:'Authentication faild'});
            } else {
                
                if (results[0].password === pw){
                const token =  jwt.sign({ email: email} , "secret1234" , {expiresIn: "1d"});
                res.send({message:'Authentication succeed' , token: token});

                } else {
                    res.send({message:'Incorrect password'}); 
                }
            }
        }
     })
}

exports.signup = (req, res, next) => {
    
    let email = req.body.email;
    let pw = req.body.password;
    console.log(email);

    let sql = "SELECT * FROM `users` WHERE email = ?"

    db.connection.query(sql, [email], (error, results, fields) => {
        if (results) {
            res.send ({message:'email address is already taken'})
        

        } else {


            let sql = "INSERT INTO `users`(`email`, `password`) VALUES (?, ?)";

            db.connection.query(sql,[email,pw], (error, results, fields) => {
        
                if (error) {
                    throw error;
               
                } else {
        
                    const token =  jwt.sign({ email: email} , "secret1234" , {expiresIn: "1d"});
                        res.send({message:'new user added' , token: token});
        
                        if(error) {
                            res.send({message:'Authentication faild'}); 
                        }
                }
        
            })

            
        }

    
})}