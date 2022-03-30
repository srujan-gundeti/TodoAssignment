const axios = require('axios');


exports.getUser = (req,response)=>{
   const {userId} = req.params;
   let todoData=[];
   let todoList = [];
   
   axios({
        url:"https://jsonplaceholder.typicode.com/todos",
        method:"GET",
        headers:{'content-Type':'application/json'}
    })
    .then(res=>{
        todoData = res.data;
        todoList = todoData.filter(item => item.userId == userId); 
        console.log(todoList);
    })
    .catch(err=>{
        console.log(err);
    }) 
   
   
   axios({
        url:`https://jsonplaceholder.typicode.com/users/${userId}`,
        method:'GET',
        headers:{'content-Type':'application/json'}
    })
    .then(res=>{
        let userData = res.data;
        userData.todos = todoList;  
        response.status(200).json({
            message:"user feteched sucessfully", user : userData
        })
    })
    .catch(err=>console.log(err));
}