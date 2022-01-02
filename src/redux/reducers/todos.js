const initialState = [
    {id: 1, desc: 'Leer React', completed: false },
    {id: 2, desc: 'Leer Redux', completed: false },
    {id: 3, desc: 'Leer React-Navigation', completed: false },
    {id: 4, desc: 'Entregar la tarea', completed: false }
]

const COMPLETE = "COMPLETE"

export const complete = id => ({
    type: COMPLETE,
    payload: id
})

export default ( state = initialState, action ) => {
    switch(action.type){
        case COMPLETE:
            return state
        default:
            return state
    }
}