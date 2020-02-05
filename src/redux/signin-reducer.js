const UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

const signinReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_IS_SIGNED_IN:
            state.isSignedIn = action.isSignedIn;
            return state;
        case UPDATE_PROFILE:
            state.profile = action.profile;
            return state;
        default:
            return state;
    }
}

export const updateIsSignedInActionCreator = (isSignedIn) => ({ type: UPDATE_IS_SIGNED_IN, isSignedIn: isSignedIn });
export const updateProfileActionCreator = (profile) => ({ type: UPDATE_PROFILE, profile: profile });

export default signinReducer;