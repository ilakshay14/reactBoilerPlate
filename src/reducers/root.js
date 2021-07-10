import INITIAL_STATE from './default.state';
// import { } from '../constants/action.constants';
// import { } from '../graphql/mutations';

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 0:
            console.log(state);
            return state;

        default:
            return state;
    }
};

export default rootReducer;
