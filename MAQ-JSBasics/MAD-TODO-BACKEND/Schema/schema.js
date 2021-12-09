import mongoose from 'mongoose';

const {Schema, model} = mongoose;
// import Schema from Mongoose.Schema;
// import { model } from 'mongoose';

//Destructuring
//use schema to structure the data in the database 
const todoSchema = Schema({
    todoTitle:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }, 
    // categoryColor: {
    //     type: String,
    //     required: true
    // }
});

// const userSchema = Schema({
//     userName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     age: {
//         type:Number,
//         required: true
//     }
// })

const todoModel = model('mad-todo',todoSchema);

export default todoModel;

// we have name exprot and defautl export
// when calling name exports, you need to specify the name while with the defaut 
// you can use any name for the import.