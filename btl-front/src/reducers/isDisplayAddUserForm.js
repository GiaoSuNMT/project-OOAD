import * as Types from '../constants/ActionTypes';
let initialState = false;
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_ISDISPLAYADDUSERFORM:
            state = !state;
            return state;
        default:
            return state;
    }
};
export default myReducer;