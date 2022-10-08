// import Schema from "mongoose";
import { Schema } from 'mongoose';
import mongoose from '../DB/client.js';
import { v4 as uuidv4 } from 'uuid';

const userResumeSchema = Schema({
    generalinfo: [
      {
        id : {
          type: String, default: uuidv4()
        },
        fname: String,
        lastname: String,
        gender: String,
        age: String,
        profession: String,
        permanentaddress: String,
        presentaddress: String,
        mobilenumber: String,
        email: String,
        describe: String
      }
    ],
    socialMedia: [
      {
        id : {
          type: String, default: uuidv4()
        },
        socialwebsite: String,
        socialwebsitelink: String
      }
    ],

    education : [
      {
        id : {
          type: String, default: uuidv4()
        },
        edutitle: String,
        edudegree: String,
        eduinstitute: String,
        edustart: String,
        eduend: String,
        edudescrib: String
      }
    ],
    experience : [
      {
        id : {
          type: String, default: uuidv4()
        },
        exptitle: String,
        expcompany: String,
        expstart: String,
        expend: String,
        expdescrib: String
      }
    ],
    skill : [
      {
        id : {
          type: String, default: uuidv4()
        },
        skilltype: String,
        skillsets: String
      }
    ]
});

const UserResumeSchema = mongoose.model("UserResumeData", userResumeSchema);

export default UserResumeSchema;
