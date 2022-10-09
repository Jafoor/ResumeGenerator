
import UserResumeSchema from "../Schema/userResumeSchema.js";
export const Create = async resumeData => {
    // console.log(resumeData);
    const result = new UserResumeSchema(resumeData);
    return  result.save();
}