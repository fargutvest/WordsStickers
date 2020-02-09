const UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

var initialState = {
    isSignedIn: false,
    profile: ''
}

const signinReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IS_SIGNED_IN:
            return { ...state, isSignedIn: action.isSignedIn }
        case UPDATE_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}

export const updateIsSignedInActionCreator = (isSignedIn) => ({ type: UPDATE_IS_SIGNED_IN, isSignedIn: isSignedIn });
export const updateProfileActionCreator = (profile) => ({ type: UPDATE_PROFILE, profile: profile });

export default signinReducer;