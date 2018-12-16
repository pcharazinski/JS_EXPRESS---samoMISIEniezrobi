const Todo = require ('../models/Todo');
const getIndex = (req, res) => 
{
    res.render ('index')
};
const postIndex = (req,res) =>{
    const newTodo = new Todo({
        title: req.body.title
    });
    newTodo.save((err)=>{
        if (err) console.log(err);
        res.redirect ('/');
    })
    
}
module.exports = {
    getIndex:getIndex,
    postIndex:postIndex
}