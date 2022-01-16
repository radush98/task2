const initialState = {
    isEdited:false,
    id:null
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_NOTE:
            return {
                ...state,
                isEdited:false
            }
        default:
            return state;
    }
}