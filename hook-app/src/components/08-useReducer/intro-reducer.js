const inititalState = [
    {
        id: 1,
        todo: 'Comprar Pan',
        done: false
    }
]

const todoReducer = (state = inititalState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state
}

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newTodo
}


todos = todoReducer(todos, action)

console.log(todos);
