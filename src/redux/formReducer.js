import { SET_NOTE } from "./types"

const initialState = {
    isEdited: false,
    note: null,
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