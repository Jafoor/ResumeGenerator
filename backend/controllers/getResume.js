import { Get } from "../models/getresume.js";

const GetResume = async (req, res) => {
    try{
        const { id } = req.params;
        const response = await Get(id);

        return res.status(200).json(response);
    }catch(err){
        return res.status(404).json(err);
    }
}

export default GetResume;