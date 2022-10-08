
import { Create } from "../models/resume.js";
const Generate = async (req, res) => {
    try{
        // console.log(req.body);
        const {generalinfo,
            socialMedia,
            education,
            skill,
            experience} = req.body;
       console.log(`1`);
        const data = {
            generalinfo,
            socialMedia,
            education,
            skill,
            experience
            }
        console.log(`11`);
        console.log(data);
        console.log(`2`);
        const newres = await Create(data);
        console.log(newres);
        return res.status(200).json("Resume has been created.");
    }catch(err){
        return res.status(404).json("Resume has not been created.");
    }
}

export default Generate;