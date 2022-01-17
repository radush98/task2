import { SET_NOTE } from "./types"

const initialState = {
    note: {
        name:'',
        category:'',
        content:''
    },
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTE:
            return {
                ...state,
                note: action.note
            }
        default:
            return state;
    }
}
