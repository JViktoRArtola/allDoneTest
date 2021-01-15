import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from '../src/Components/Accordion';

test('renders correctly', () => {
  const tree = renderer.create(<Accordion />).toJSON();
  expect(tree).toMatchSnapshot();
});
