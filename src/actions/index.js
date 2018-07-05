export const LOGIN = 'LOGIN';

export const login = (token) => {
    return {
    type: LOGIN,
    token: token,
    }
};
