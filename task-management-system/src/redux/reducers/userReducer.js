const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'CREATE_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        default:
            return state;
    }
};

export default userReducer;
