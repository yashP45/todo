const TodoModel = require("../Model/todoModel")

module.exports.getToDo = async (req, res) => {
    const Todo = await TodoModel.find();
    res.send(Todo)
}

module.exports.createToDo = async (req, res) => {
    try {
        const newTodo = await TodoModel.create(req.body)
        res.status(200).json({
            status: 'success',
            newTodo
        })
    } catch (error) {
        console.log(error);
    }

}