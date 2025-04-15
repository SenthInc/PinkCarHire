// const mongoose = require('mongoose');

// const DB = process.env.MONGO_URL;
// mongoose.connect(DB).then(
//     ()=>{
//         console.log("DB connected...")
//     })
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ MongoDB connected");
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});
