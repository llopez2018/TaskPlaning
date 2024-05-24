export const fetchTasks = () => {
    return {
        type: 'FETCH_TASKS'
    };
};

export const createTask = (task) => {
    return {
        type: 'CREATE_TASK',
        payload: task
    };
};
