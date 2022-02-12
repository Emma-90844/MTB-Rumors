

// LOGIN start
export const LoginStart = (userCredentials) => ({
    type:'LOGIN_STAT',
});

// LOGIN success
export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
})

// LOGIN fail
export const LoginFailure = () => ({
    type: 'LOGIN_FAILURE',
});


// To update the state we shall use the reducer

// UPDATED STATE
// LOGIN start
export const UpdateStart = (userCredentials) => ({
    type:'UPDATE_STAT',
});

// LOGIN success
export const UpdateSuccess = (user) => ({
    type: 'UPDATE_SUCCESS',
    payload: user,
})

// LOGIN fail
export const UpdateFailure = () => ({
    type: 'UPDATE_FAILURE',
});






























