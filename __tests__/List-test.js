import React from 'react';
import renderer from 'react-test-renderer';
import List from '../src/Components/List';

test('renders correctly', () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});
