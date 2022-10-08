import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.CONNECTION_URL;

const variables = {
    connectionString
};

export default variables;