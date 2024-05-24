export const fetchUsers = () => {
    return {
        type: 'FETCH_USERS'
    };
};

export const createUser = (user) => {
    return {
        type: 'CREATE_USER',
        payload: user
    };
};
