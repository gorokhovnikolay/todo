import './index.css'
import { createTodosForm } from './src/utilits/createTodoForm'
import { createTodosList } from './src/utilits/createTodosList'

class Todos{
    #container
    #todoList
    #todos
    constructor(){
        this.#container = document.querySelector('.container')
        this.#todoList = document.createElement('div')
        this.#todos = [{id: 1, text: 'Тест заметка', cheked:false }]
    }

    createTodos(){        
        const formTodo = createTodosForm()
        this.#container.append(formTodo)
        const todoList = createTodosList(this.#todos, this.#todoList)
        this.#container.append(todoList)

        formTodo.addEventListener('submit',(e)=>{
            e.preventDefault()
            const text = e.target.text.value
            const id = Date.now()
            this.#todos.push({text,id})
            this.#container.append(formTodo)
            this.#container.append(createTodosList(this.#todos,this.#todoList))
        })

        this.#todoList.addEventListener('click',(e)=>{
            const id = e.target.closest('.todo-item').id
            this.#todos.splice(this.#todos.findIndex(todo=>todo.id === Number(id)),1)
            this.#container.append(createTodosList(this.#todos,this.#todoList))
        })
    }

}

const todos = new Todos()
todos.createTodos()
