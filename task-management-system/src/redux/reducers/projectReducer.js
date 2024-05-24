const initialState = {
    projects: []
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            // Logic to fetch projects
            return {
                ...state,
                projects: action.payload
            };
        case 'CREATE_PROJECT':
            return {
                ...state,
                projects: [...state.projects, action.payload]
            };
        default:
            return state;
    }
};

export default projectReducer;
