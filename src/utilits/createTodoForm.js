export const createTodosForm =()=>{
    const todoForm = document.createElement('form')

    const addInput = document.createElement('input')
    addInput.type = 'text'
    addInput.id = 'text'

    const submitTodo = document.createElement('input')
    submitTodo.type = 'submit'
    submitTodo.id = 'submit'
    submitTodo.name = 'submit'

    todoForm.append(addInput, submitTodo)
    return todoForm
}