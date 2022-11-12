const mongoose = require('mongoose');
const envs = require('../utils/env');

class DbConfig{
        static getDbConfig(){
                return mongoose.connect(envs.mongodbConnectionString,{
                        useUnifiedTopology:true,
                        useNewUrlParser: true,
                        useFindAndModify: false,
                        useCreateIndex: true
                },(err)=>{
                        !err? console.log("connected to mongodb"):
                        console.log("could not connect to mongodb");
                });
        }
};
module.exports = DbConfig;