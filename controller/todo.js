const axios = require('axios');

exports.gettodos = (req,response) =>{
    let todoData = [];
    
    axios({
        url:"https://jsonplaceholder.typicode.com/todos",
        method:"GET",
        headers:{'content-Type':'application/json'}
    })
    .then(res=>{
        todoData = res.data;
        console.log("data feteched successfully");
        todoData.forEach(element => {
            delete element.userId
        });
        response.status(200).json({
            message: "Locations Fetched Succesfully", todo : todoData
        })
    })
    .catch(err=>{
        console.log(err);
    })

    

}