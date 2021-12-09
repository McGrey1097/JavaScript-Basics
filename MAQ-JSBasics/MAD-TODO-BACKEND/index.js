import dotenv from 'dotenv';
import express from 'express';
import todoModel from './Schema/schema.js';
import cors from 'cors';
import Mongoose  from 'mongoose';

const app = express();

//middlewares
dotenv.config();
app.use(cors());

app.use(express.json());

const PORT = 3000 || process.env.PORT;

const db = process.env.DB_URL;

Mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (()=> console.log('connected to DB'))
    .catch(err => console.log(err));



//get()
app.get( '/todo', (req,res) => {
    res.json({
    message: 'Welcome to my todo app'
    });
});

//post()
// app.post('/Todo', (req,res) => {
//     res.send('Use this route to create new todo');
// });

// //patch()

// app.patch('todo', (req, res) => {
//     res.send('use this route to update some data in the database')
// })

// app.put('/todo', (req, res) => {
//     res.send('use this to update the whole data in a database')
// });

// app.delete('/todo', (req, res) => {
//     res.send('use this to delete something from the data');
// });
/**
 get() -- > Read
 post() --> Create
 patch() --> update, patch updates partially
 put() -- > put updates the entire resource
 delete() -- > Delete

 this is the CRUD method in javascript which stands for
 Create, Read, Update, Delete. These are the methods used in javascript mostly.
 */

 //get all todos

 app.get('/todos', async (req, res) => {
    
    const allTodos = await todoModel.find({});
        if (allTodos) {
            return res.status(200).json({
                message: 'Todos fetched successfully',
                data: allTodos
            })
        }else {
            //error
            return res.status(500).json({
                message: 'Ooops!, unable to fetch todos'
            });
        }
    
 })


//Get all category todos
app.get('/todos/:category', async (req, res) => {
    const {category} = req.params;
    const allCategoryTodos = await todoModel.find({}).where({category}).equals(category);
    if(allCategoryTodos){
        return res.status(200).json({
            message: `${category}, todos fethced successfully`,
            data: allCategoryTodos
        })
    }else {
        return res.status(500).json({
            message: `Ooops, unable to fetch ${category}`
        })
    }
})


//creating a new todo

app.post('/todo', async (req, res) => {
    const {todoTitle, category} = req.body;
    const newTodo = await todoModel.create({
        todoModel,
        category
    });
    if (newTodo) {
        //success
        return res.status(200).json({
            message: 'Todo created successfully',
            // /data: newTodo
        });
    } else {
        return res.status(500).json( {
            message: 'Error createing Todo'
        })
    }
})

//delete a todo
app.delete('/todo/:id',async (req, res) =>{
    const {id} = request.params;
    const deletedTodo = await todoModel.findByIdAndDelete({id});

    if(deletedTodo) {
        //success
        return res.status(200).json({
            message: 'Todo deleted successfully'
        })
    }else{
        return res.status(500).json({
            message: 'Error deleting Todo'
        })
    }
})

// app.post('/user', (req, res) =>{
//     const {userna}
// })













app.listen((PORT), () =>{
    console.log(`listening on port ${PORT}`);
});