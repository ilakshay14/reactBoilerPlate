import INITIAL_STATE from './default.state';
import userReducer from './user';

const rootReducer = (state = INITIAL_STATE, action) => {
    if(action.payload?.includes('USER')){
        userReducer(state, action);
    } else if(action.payload?.includes('REQUEST')){

    } else return state;
}

export default rootReducer;