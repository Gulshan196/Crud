import jwt from "jsonwebtoken"
import client from '../connect.js'

var code_verifier = 'some-random-string'
      
// const crypto = require('crypto')
import crypto from 'crypto'
import base64url from 'base64url'

// const base64url = require('base64url')

var hash = crypto.createHash('sha256').update(code_verifier).digest();
export var code_challenge = base64url.encode(hash)
      
class Authentication{

    static checkUserAuth = async(req , res , next)=>{

        let token
    
    const{authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try{
            token = authorization.split(' ')[1]
    
            // verify token
            const {userID} = jwt.verify(token , code_challenge)
            // console.log(userID)
    
            // get user from tokken

            req.userID = await client.query(`SELECT * FROM employees where employees.empid = '${userID}'`)
        // console.log(emp.rows[0])
            
            
            next()
    
    
        }catch(err){
        res.send({"status":"cant authorize"})
        }
    }else{
        res.send({"status":"failed","message":"token not found"})
    }
    
}
}
export default Authentication