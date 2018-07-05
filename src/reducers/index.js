import { LOGIN } from '../actions';

const initialState = {
    token: "",
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.token)
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
};