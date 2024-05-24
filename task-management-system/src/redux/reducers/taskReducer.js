const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return {
                ...state,
                tasks: action.payload
            };
        case 'CREATE_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        default:
            return state;
    }
};

export default taskReducer;
