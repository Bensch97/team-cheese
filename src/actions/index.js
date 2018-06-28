export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';

export const register = (username, password, displayName) => {
    return {
        type: REGISTER,
        user: {
            username,
            displayName
        }
    }
}

export const login = (username, token, userId) => {
    return {
        type: LOGIN,
        user: {
            username, 
            token,
            userId
        }
    }
}