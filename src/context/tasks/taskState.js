import React, {useReducer} from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import {DELETE_TASK, GET_TASKS, POST_TASK, UPDATE_TASK} from '../../types';

const TaskState = (props) => {
  const tasks = [
    {
      id: 1,
      task: [
        'Open AllDone Test',
        '#important',
        '@Victor',
        'https://www.google.com',
        'victor@gmail.com',
      ],
    },
    {
      id: 2,
      task: [
        'Do the Test',
        '#important',
        '@Victor',
        'https://www.google.com',
        'victor@gmail.com',
      ],
    },
    {
      id: 3,
      task: [
        'Send the Test',
        '#important',
        'to',
        '@Carmona',
        'https://www.google.com',
        'victor@gmail.com',
      ],
    },
  ];

  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // GET Tasks
  const getTasks = () => {
    dispatch({
      type: GET_TASKS,
      payload: tasks,
    });
  };
  const postTask = (task) => {
    task.id = Date.now();
    dispatch({
      type: POST_TASK,
      payload: task,
    });
  };
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        getTasks,
        postTask,
        updateTask,
        deleteTask,
      }}>
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
