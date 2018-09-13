
const initialState = {
    einfaerbenzwei: "yellow"
};

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "DASISTEINEACTIONZWEI":

        var newState = Object.assign({}, state, { einfaerbenzwei: action.datazwei });
        state = newState;
        return state;


        default:
        return state
    }
}

