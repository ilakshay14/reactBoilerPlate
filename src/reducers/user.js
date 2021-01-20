import { USER_LOGIN, USER_LOGOUT } from '../constants/action.constants';

const userReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            Object.assign({}, state, {
                user: { ...action.payload }
            })
            break;

        case USER_LOGOUT:
            Object.assign({}, state, {
                user: { }
            })
            break;
        
        default:
            state;
            break;

        return state;
    }
}

export default userReducer;