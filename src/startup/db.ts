const mongoose = require('mongoose');
export default function () {
    mongoose.connect("mongodb://admin:password@mongo:27017/exchangehub?authSource=admin").then(() => console.log(`Connected to database...`)).catch((err) => {
        console.log(err.message)
    });
}