const dotenv = require('dotenv');
dotenv.config();

const envPort  = process.env.PORT;
const mongodbConnectionString  = process.env.MONGODB_URI;
const saltRounds = process.env.SALTROUNDS;
module.exports = {
        envPort,
        mongodbConnectionString,
        saltRounds
};