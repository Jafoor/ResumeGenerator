import { UserExist, CreateUser } from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const jwtKey = process.env.jwtKey
const jwtExpirySeconds = process.env.jwtExpirySeconds

export const SignUp = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const userExist = await UserExist(email);
        if (userExist) {
            throw { message: "Email address already registered" };
        }

        var salt = bcrypt.genSaltSync(10);
        var hashedpassword = bcrypt.hashSync(password, salt);
        console.log(hashedpassword);

        const newUser = await CreateUser({
            name,
            email,
            password:hashedpassword
          });
        
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
                const token = jwt.sign({ email, id: userExist._id }, jwtKey, {
                algorithm: "HS256",
                expiresIn: '12h',
            });

            console.log(token);

            res.status(200).json({message: "User has been created.",
                                token
        })
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