import React, {useState} from 'react';
import {tasks} from '../js/data';
import List from './List';
import Input from './Input';

export default function Tasks() {
  const [list, setList] = useState(tasks);
  return (
    <>
      <Input list={list} setList={setList} />
      {list.map((item, ind) => (
        <List key={ind} item={item} list={list} setList={setList} />
      ))}
    </>
  );
}
