import React, {useContext, useEffect} from 'react';
import List from './List';
import Input from './Input';
import taskContext from '../context/tasks/taskContext';

export default function Tasks() {
  const tasksContext = useContext(taskContext);
  const {tasks, getTasks} = tasksContext;
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <Input />
      {tasks.map((item) => (
        <List key={item.id} item={item} />
      ))}
    </>
  );
}
