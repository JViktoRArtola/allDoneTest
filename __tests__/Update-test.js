import React from 'react';
import renderer from 'react-test-renderer';
import Update from '../src/Components/Update';

test('renders correctly', () => {
  const tree = renderer.create(<Update />).toJSON();
  expect(tree).toMatchSnapshot();
});
