import INITIAL_STATE from './default.state';

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action) {
        case 0:
            console.log(state);
            break;

        default:
            break;
    }
};

export default rootReducer;
