require('dotenv').config();
const initializeDB = async(mongoose)=>{
    await mongoose.connect(process.env.DB_CONNECTION)
}

module.exports = initializeDB;
