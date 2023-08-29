const mongoose = require ("mongoose");

//creating a database

//  mongoose.connect("mongodb://localhost:27017/Medmentorz",{
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("connection successful")
// }) .catch((error) => {console.log(error)});


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/medmentorz", {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}


module.exports = connectDB;