
const initialState = {
    einfaerben:"green",
};

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "DASISTEINEACTION":
      
        var newState = Object.assign({}, state, { einfaerben: action.data });
        state = newState;
        return state;

        default:
        return state
    }
}

