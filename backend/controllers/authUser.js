import { UserExist, CreateUser } from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const jwtKey = "my_secret_key"
const jwtExpirySeconds = 3000

export const SignUp = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        console.log(req.body);
        const userExist = await UserExist(email);
        if (userExist) {
            throw { message: "Email address already registered" };
        }
        console.log(userExist);
        var salt = bcrypt.genSaltSync(10);
        var hashedpassword = bcrypt.hashSync(password, salt);
        console.log(`1`);
        console.log(hashedpassword);
        console.log(`2`);
        const newUser = await CreateUser({
            name,
            email,
            password:hashedpassword
          });
          console.log(3);
        
          res.status(200).json("User has been created.")   

    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}

export const SignIn = async (req, res) =>{
    try{
        const { email, password } = req.body;
        const userExist = await UserExist(email);

        if (!userExist) {
            throw { message: "No user is registered with this email." };
        }

        console.log(userExist);
        if(bcrypt.compareSync(password, userExist.password)){
                const token = jwt.sign({ email }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
            });

            console.log(token);

            res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });

            res.status(200).json({message: "User has been created."})
        }
        else{
            throw{ message: "Incorrect Password"}
        }
    }catch(err){
        res.status(500).json({err});
    }
}

export const LogOut = async (req, res) => {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
}