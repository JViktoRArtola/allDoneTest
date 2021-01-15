import React from 'react';
import renderer from 'react-test-renderer';
import Current from '../src/Components/Current';

test('renders correctly', () => {
  const tree = renderer.create(<Current />).toJSON();
  expect(tree).toMatchSnapshot();
});
