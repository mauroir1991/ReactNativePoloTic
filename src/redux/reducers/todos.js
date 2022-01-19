const initialState = [
    {id: 1, desc: 'Leer React', completed: false },
    {id: 2, desc: 'Leer Redux', completed: false },
    {id: 3, desc: 'Leer React-Navigation', completed: false },
    {id: 4, desc: 'Entregar la tarea', completed: false }
]

const COMPLETE = "COMPLETE"

const SUBMIT = "SUBMIT"

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export const submit = text => ({
    type: SUBMIT,
    payload: {
        id: Math.random().toString(12),
        desc: text,
        completed: false
    }
})

export default ( state = initialState, action ) => {
    switch(action.type){
        case COMPLETE:
            return state.map(x => x.id == action.payload ? ({...x,completed: !x.completed}) : x )
        case SUBMIT:
            return [action.payload].concat(state)
        default:
            return state
    }
}