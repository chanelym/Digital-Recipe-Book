require('dotenv').config()
// config/database.js
module.exports = {

    url : process.env.MONGODB_URI,
    dbName : process.env.DB_NAME,
};

// // config/database.js
// module.exports = {

//     'url' : 'mongodb+srv://demo:demo@cluster0.q2ojb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
//     'dbName': 'demo'
// };