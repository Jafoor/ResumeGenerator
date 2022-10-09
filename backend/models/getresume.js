import UserResumeSchema from "../Schema/userResumeSchema.js";

export const Get = async id => {
    return UserResumeSchema.findOne({_id:id});
}