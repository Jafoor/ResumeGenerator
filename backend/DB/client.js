import mongoose from "mongoose";
import variables from "../config/variables.js";
mongoose.connect(variables.connectionString);
export default mongoose;