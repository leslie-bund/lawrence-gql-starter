const startServer = require('./app/apolloServer');
const ConnectToDb = require('./app/utils/connectToDb'); 

ConnectToDb.establishConnectionToDb();

startServer(); 
 