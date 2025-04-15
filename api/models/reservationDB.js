// const mongoose = require('mongoose');


// const reservationSchema = new mongoose.Schema({
//     owner: {type:mongoose.Schema.Types.ObjectId, ref: 'Client'},
//     firstname: String,
//     lastname:String,
//     age:String,
//     phone:String,
//     email:String,
//     address:String,
//     city:String,
//     zipcode:String,
//     carType: String, 
//     pickPlace: String, 
//     dropPlace: String, 
//     pickDate: String, 
//     dropDate: String, 
//     pickTime: String,
//     dropTime : String
// })



// const Reservation = mongoose.model('Reservation',reservationSchema);

// module.exports = Reservation;

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    firstname: String,
    lastname: String,
    age: Number,
    phone: String,
    email: String,
    address: String,
    city: String,
    zipcode: String,
    carType: String,
    pickPlace: String,
    dropPlace: String,
    pickDate: Date,
    dropDate: Date,
    pickTime: String,
    dropTime: String
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
