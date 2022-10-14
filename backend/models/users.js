import Authentication from "../Schema/authentication.js";

export const UserExist = async email =>{
    console.log(email);
    const userExist = await Authentication.findOne({ email });
    return userExist;
}

export const CreateUser = data => {
    console.log(data);
    const user = new Authentication(data);
    return user.save();
}