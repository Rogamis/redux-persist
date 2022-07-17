export const ADD_TASK = 'TASKS::ADD_TASK';
export const ADD_TASKS = 'TASKS::ADD_TASKS';
export const REMOVE_TASK = 'TASKS::REMOVE_TASK';

export const fetchTasks = () => async (dispatch, getState) => {
    try {
        const tasks = getState().todo.tasks;
        if(tasks.length !== 0){
            return;
        }
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3`);
        const data = await res.json();
        dispatch(addTasks(data))
    } catch(e){
        console.log('fetchTasks', e)
    }
}

export const formTask = (taskTitle, callback) => async (dispatch, getState) => {
    try {
        const task = {
            id: new Date(),
            title: taskTitle
        }
        dispatch(addTask(task));
        if(!!callback){
            callback()
        }
    } catch(e){
        console.log('formTask', e)
    }
}

/**
export const authorization = () => async (dispatch, getState) => {
    try {
        const username = getState().auth.username;
        const password = getState().auth.password;
        const response = await Auth.login(username, password);
        console.log('token => ', response.data);
        dispatch(setToken(response.data.access_token));
        dispatch(setUserId(response.data.userID));
    } catch (e) {
        console.log('fetchToken', e.response.data);
        Alert.alert('Oops...', e.response.data.displayError);
    }
};
 */

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const addTasks = (tasks) => {
    return {
        type: ADD_TASKS,
        payload: tasks
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}
