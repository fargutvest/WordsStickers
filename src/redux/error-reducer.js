const UPDATE_ERROR = 'UPDATE_ERROR';

var initialState = {
    error: ""
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ERROR:
            return { ...state, error: action.newError }
        default:
            return state;
    }
}

export const updateErrorActionCreator = (newError) => ({ type: UPDATE_ERROR, newError: newError });

export default errorReducer;