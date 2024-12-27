import { Router } from 'express'
import { Todo } from '../models/todo'

const router = Router()

let todo:Todo[] = []

router.get("/",(req,res)=>{
    res.status(200).json(todo)
})

router.post('/',(req,res)=>{
    const newTodo:Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todo.push(newTodo)
    res.status(201).json({message:"Added Todo",todo: newTodo})
})

router.put('/:todoId',(req, res) => {
    const tid = req.params.todoId
    const todoIndex = todo.findIndex(item=>item.id === tid)
    if(todoIndex >= 0){
        todo[todoIndex] = {id: todo[todoIndex].id,text: req.body.text}
        return res.status(200).json({message:"Updated Todo",todo:todo[todoIndex]})
    }
    res.status(404).json({message:"Could not find todo for this id."})
})

router.delete('/:todoId',(req, res) => {
    todo = todo.filter(item=>item.id !== req.params.todoId)
    res.status(200).json({message:"Deleted Todo"})
})

export default router;