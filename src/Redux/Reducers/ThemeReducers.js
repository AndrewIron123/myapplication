import { ThemeActions } from "./../Actions/ThemeActions";


export const ThemeReducers = {
    reducer
}

const initialState = {
    theme: true
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE":
            return ThemeActions.action(state);
        default:
            return state;
    }
}