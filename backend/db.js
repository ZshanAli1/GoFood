const mongoose = require("mongoose");
const mongoUR =
  "mongodb+srv://zshan4487:w6NBMYAEE3j6H5Du@cluster0.nxkrxgu.mongodb.net/Food?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoUR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = mongoose.connection.db.collection("food_items");
    const dataa = await fetched_data.find({}).toArray();
    // console.log(dataa);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
