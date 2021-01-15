import React from 'react';
import renderer from 'react-test-renderer';
import Delete from '../src/Components/Delete';

test('renders correctly', () => {
  const tree = renderer.create(<Delete />).toJSON();
  expect(tree).toMatchSnapshot();
});
