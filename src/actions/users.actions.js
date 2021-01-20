import { USER_LOGIN, USER_LOGOUT } from '../constants/action.constants';

export const userLogin = (payload) => {
    return { type: USER_LOGIN, payload }
}