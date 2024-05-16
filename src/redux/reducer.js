import * as actions from "./actionTypes";

let lastId = 0

export default function reducer(state = [], action){
    switch(action.type){
        case actions.ADD_BUG:
            return [...state, {
                id: ++lastId,
                description: action.payload.description,
                solved: false
            }]

        case actions.REMOVE_BUG:
            return state.filter(bug => bug.id != action.payload.id)

        case actions.SOLVE_BUG:
            return state.map(bug => bug.id === action.payload.id ? ({
                ...bug,
                solved: true
             }) : bug )

        default:
            return state
    }
}