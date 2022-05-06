import React from 'react';
import { render, screen } from '@testing-library/react';
import AccessibleApp from './AccessibleApp';

test('renders learn react link', () => {
  render(<AccessibleApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
