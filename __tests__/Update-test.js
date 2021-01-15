import React from 'react';
import renderer from 'react-test-renderer';
import Update from '../src/Components/Update';
import {tasks} from '../src/js/data';

test('renders correctly', () => {
  const tree = renderer
    .create(<Update list={tasks} item={tasks[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
