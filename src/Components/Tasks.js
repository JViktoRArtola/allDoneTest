import React, {useState} from 'react';
import {tasks} from '../js/data';
import List from './List';

export default function Tasks() {
  const [list, setList] = useState(tasks);
  return (
    <>
      {list.map((item, ind) => (
        <List key={ind} item={item} list={list} setList={setList} />
      ))}
    </>
  );
}
