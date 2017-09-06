import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Hello from '../Index';

describe('<Hello>', function () {
  it('renders without problems', function () {
    var rendered = TestUtils.renderIntoDocument(<Hello/>);
    expect(rendered).toBeDefined();
  });
});
