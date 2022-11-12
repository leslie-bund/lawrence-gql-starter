const DbConfig = require('../config/dbConfig');


class ConnectToDb {
        static establishConnectionToDb(){
                DbConfig.getDbConfig();
        }
};
module.exports = ConnectToDb;