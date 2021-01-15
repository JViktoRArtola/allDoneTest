import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/Components/Header';

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
