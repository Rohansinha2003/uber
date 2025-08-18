const mongoose = require('mongoose');


const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // ...existing options...
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectToDb;
