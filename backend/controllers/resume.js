
import { Create } from "../models/resume.js";
const Generate = async (req, res) => {
    try{
        // console.log(req.body);
        const {generalinfo,
            socialMedia,
            education,
            skill,
            experience} = req.body;

        const data = {
            generalinfo,
            socialMedia,
            education,
            skill,
            experience
            }

        const newres = await Create(data);
        
        return res.status(200).json(newres);
    }catch(err){
        return res.status(404).json("Resume has not been created.");
    }
}

export default Generate;